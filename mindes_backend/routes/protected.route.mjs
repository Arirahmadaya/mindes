// routes/protectedRoutes.js
const express = require("express");
const router = express.Router();
const passport = require("passport");
const { User } = require("../database/models");

// Middleware to protect routes
function authenticateJWT(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  console.log("Received token:", token);

  if (token) {
    req.headers.authorization = `Bearer ${token}`;
  } else {
    console.log("No token provided");
    return res.status(401).json({ message: "Unauthorized" });
  }

  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (err || !user) {
      console.error("Authentication error:", err, info);
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = user;
    next();
  })(req, res, next);
}

// Example protected route
router.get("/profile", authenticateJWT, (req, res) => {
  if (!req.user.avatar) {
    res.json({ user: { ...req.user } });
  } else {
    const avatarUrl = `${req.protocol}://${req.get("host")}${req.user.avatar}`;
    res.json({ user: { ...req.user, avatar: avatarUrl } });
  }
});

module.exports = router;
