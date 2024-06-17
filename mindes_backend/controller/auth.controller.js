const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { ExtractJwt, Strategy: JwtStrategy } = require("passport-jwt");
const { User } = require("../database/models");

require("dotenv").config();

const router = express.Router();

// Setup Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/uploads/avatar"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`
    );
  },
});

// Passport Local Strategy
passport.use(
  "local",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      try {
        const user = await User.findOne({ where: { email: username } });
        if (!user) {
          return done(null, false, { message: "Email tidak ditemukan." });
        }

        if (user.googleId && !password) {
          return done(null, false, {
            message: "Silahkan login melalui Google.",
          });
        }

        const isValid = await user.isValidPassword(password);
        if (!isValid) {
          return done(null, false, { message: "Kata sandi salah." });
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

// Passport Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async function (accessToken, refreshToken, profile, cb) {
      try {
        let user = await User.findOne({ where: { googleId: profile.id } });

        if (!user) {
          user = await User.findOne({
            where: { email: profile.emails[0].value },
          });

          if (user) {
            if (!user.googleId) {
              await User.update({
                googleId: profile.id,
                avatar: user.avatar || profile.photos[0].value,
                email_verified: profile.emails[0].verified,
              });
            }
          } else {
            user = await User.create({
              avatar: profile.photos[0].value,
              googleId: profile.id,
              nama:
                profile.displayName ||
                `${profile.name.givenName} ${profile.name.familyName}`,
              email: profile.emails[0].value,
              email_verified: profile.emails[0].verified,
            });
          }
        }

        return cb(null, user);
      } catch (err) {
        return cb(err);
      }
    }
  )
);

// Passport JWT Strategy
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    async (jwtPayload, done) => {
      try {
        const user = await User.findByPk(jwtPayload.id);
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (err) {
        return done(err, false);
      }
    }
  )
);

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res) => {
    if (!req.user) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    const user = req.user;
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  }
);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  (req, res) => {
    // Generate JWT token
    const user = req.user;
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.redirect(`http://localhost:5173/auth/google/callback?token=${token}`);
  }
);

router.post(
  "/register",
  multer({ storage: storage }).single("avatar"),
  async (req, res) => {
    try {
      const { nama, email, password, no_hp, tgl_lahir, gender } = req.body;
      let avatar = null;

      if (req.file) {
        avatar = `/uploads/avatar/${req.file.filename}`;
      }

      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: "Email is already registered" });
      }

      const newUser = await User.create({
        avatar,
        nama,
        email,
        password,
        no_hp,
        tgl_lahir,
        gender,
      });

      const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      res.json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id)
    .then((user) => done(null, user))
    .catch((err) => done(err, null));
});

module.exports = router;
