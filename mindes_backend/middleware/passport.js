import passport from "passport";
import LocalStrategy from "passport-local";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { query } from "../database/db.mjs";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import crypto from 'crypto';

dotenv.config();

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async (email, password, done) => {
      try {
        const result = await query("SELECT * FROM usertable WHERE email = ?", [email]);
        const user = result[0];

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

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    async (jwtPayload, done) => {
      try {
        const result = await query("SELECT * FROM usertable WHERE id_user = ?", [jwtPayload.id]);
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

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (token, tokenSecret, profile, done) => {
      try {
        const result = await query("SELECT * FROM usertable WHERE email = ?", [profile.emails[0].value]);
        let user = result[0];

        if (!user) {
          const randomPassword = crypto.randomBytes(16).toString('hex');
          const hashedPassword = await bcrypt.hash(randomPassword, 12);
          
          await query(
            "INSERT INTO usertable (username, email, password, roles) VALUES (?, ?, ?, 'umum')",
            [profile.displayName, profile.emails[0].value, hashedPassword]
          );
          const newUser = await query("SELECT * FROM usertable WHERE email = ?", [profile.emails[0].value]);
          user = newUser[0];
        }

        return done(null, user);
      } catch (err) {
        return done(err, false);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id_user);
});

passport.deserializeUser(async (id, done) => {
  try {
    const result = await query("SELECT * FROM usertable WHERE id_user = ?", [id]);
    const user = result[0];
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
