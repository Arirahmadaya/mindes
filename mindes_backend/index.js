import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { testConnection } from "./database/db.js";
import router from "./routes/index.js";

// import listEndpoints from 'express-list-endpoints';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.use(router);


app.get("/", (req, res) => {
    res.send("Hello Murtherfucker!");
});

app.listen(process.env.APP_PORT, () => {
    testConnection();
    console.log(`http://localhost:${process.env.APP_PORT}`);
});

// // Fungsi untuk mendapatkan daftar endpoint dari semua router dalam aplikasi Express
// function getAllEndpoints(app) {
//     const routes = [];
//     // Telusuri setiap layer di stack aplikasi Express
//     app._router.stack.forEach((layer) => {
//         if (layer.route) {
//             // Jika layer memiliki route, ini adalah endpoint
//             const route = {
//                 path: layer.route.path,
//                 methods: Object.keys(layer.route.methods).join(', ')
//             };
//             routes.push(route);
//         } else if (layer.name === 'router' && layer.handle.stack) {
//             // Jika layer adalah router, telusuri setiap layer di stack router
//             layer.handle.stack.forEach((handler) => {
//                 const route = {
//                     path: handler.route.path,
//                     methods: Object.keys(handler.route.methods).join(', ')
//                 };
//                 routes.push(route);
//             });
//         }
//     });
//     return routes;
// }

// // Gunakan fungsi ini untuk mendapatkan daftar endpoint
// app.use("/endpoints", (req, res) => {
//     const endpoints = getAllEndpoints(app);
//     res.json(endpoints);
// });

