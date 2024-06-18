import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import expressListEndpoints from "express-list-endpoints";
import { testConnection } from "./database/db.js";
import router from "./routes/index.js";
import session from 'express-session';
import authRoutes from "./routes/auth.route.js";

// About auth
// const protectedRoutes = require("./routes/protected.route.js");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
    },
  })
);

// User routes
app.use(router);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hi babygurl 💅🫃🫄🤰🐮🐄🐐!❤️😘😍🐲🐸🐴🐎🐄🐐");
});

app.use("/endpoints", (req, res) => {
  res.json(expressListEndpoints(app));
});

app.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    req.session.destroy(() => {
      res.send("Adios!");
    });
  });
});

app.listen(process.env.APP_PORT || 3000, () => {
  testConnection();
  console.log(`http://localhost:${process.env.APP_PORT || 3000}`);
});
