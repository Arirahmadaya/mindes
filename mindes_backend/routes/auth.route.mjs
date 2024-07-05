// routes/auth.route.mjs
import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import { query } from "../database/db.mjs";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.post("/login", (req, res, next) => {
  passport.authenticate("local", { session: false }, async (err, user, info) => {
    if (err) {
      console.error("Error during login:", err);
      return res.status(500).json({ message: "Internal server error" });
    }

    if (!user) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    try {
      const userRole = await query("SELECT roles FROM usertable WHERE id_user = ?", [user.id_user]);

      if (!userRole || userRole.length === 0) {
        return res.status(500).json({ message: "Roles not found" });
      }

      const token = jwt.sign({ id: user.id_user, roles: userRole[0].roles }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      res.json({ token, roles: userRole[0].roles });
    } catch (dbErr) {
      console.error("Database error during login:", dbErr);
      return res.status(500).json({ message: "Internal server error" });
    }
  })(req, res, next);
});

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);

    const checkUser = await query("SELECT * FROM usertable WHERE email = ?", [email]);
    if (checkUser.length > 0) {
      return res.status(400).json({ message: "Email sudah terdaftar" });
    }

    await query("INSERT INTO usertable (username, password, email, roles) VALUES (?, ?, ?, 'umum')", [username, hash, email]);

    const newUser = await query("SELECT * FROM usertable WHERE email = ?", [email]);
    const user = newUser[0];

    const token = jwt.sign({ id: user.id_user, roles: user.roles }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token, roles: user.roles });
  } catch (err) {
    console.error("Error during registration:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login", session: false }),
  (req, res) => {
    const token = jwt.sign({ id: req.user.id_user, roles: req.user.roles }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.redirect(`http://localhost:5173/?token=${token}`);
  }
);


// router.get("/logout", (req, res, next) => {
//   req.logout(function (err) {
//     if (err) {
//       return next(err);
//     }
//     req.session.destroy(() => {
//       res.send("Adios!");
//     });
//   });
// });
export default router;
