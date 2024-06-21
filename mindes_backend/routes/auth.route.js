import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import { Strategy as LocalStrategy } from "passport-local";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import { query } from "../database/db.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// Buat if untuk membatasi roles ketika user bukan admin ataupun superadmin -> redirect ke landing page (folder auth) (Navbar (ada conditional rendering)),  
// I already have protected route

// Passport Local Strategy
passport.use(
  "local",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const result = await query(
          "SELECT * FROM usertable WHERE email = ?",
          [email]
        );

        const user = result[0]; // Ambil user pertama dari hasil query

        if (!user) {
          return done(null, false, { message: "Email tidak ditemukan." });
        }

        const isValid = await bcrypt.compare(password, user.password);
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

// Passport JWT Strategy
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    async (jwtPayload, done) => {
      try {
        const result = await query(
          "SELECT * FROM usertable WHERE id_user = ?",
          [jwtPayload.id]
        );
        const user = result[0];

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
    const token = jwt.sign({ id: user.id_user }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  }
);

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);
    
    const checkUser = await query("SELECT * FROM usertable WHERE email = ?", [
      email,
    ]);
    if (checkUser.length > 0) {
      return res.status(400).json({ message: "Email sudah terdaftar" });
    }

    await query(
      "INSERT INTO usertable (username, password, email) VALUES (?, ?, ?)",
      [username, hash, email]
    );

    const newUser = await query("SELECT * FROM usertable WHERE email = ?", [
      email,
    ]);
    const user = newUser[0];

    const token = jwt.sign({ id: user.id_user }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

passport.serializeUser((user, done) => {
  done(null, user.id_user);
});

passport.deserializeUser(async (id, done) => {
  try {
    const result = await query("SELECT * FROM usertable WHERE id_user = ?", [
      id,
    ]);
    const user = result[0];
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

export default router;
