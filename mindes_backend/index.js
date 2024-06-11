import express from "express"
import cors from 'cors'
import dotenv from "dotenv"
import router from "./router/index.js"
// import ListRoutes from "./Routes/ListRoutes.js"
import { testConnection, query } from "./database/db.js";

dotenv.config();
const app = express();


app.use(express.json());
app.listen(process.env.PORT, async()=> {
    await testConnection();
    console.log(`https://localhost:${process.env.APP_PORT}`)
})


// import express from 'express'
// import dotenv from 'dotenv'
// import { testConnection,query } from './database/db.js'

// const app = express()

// const db = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"root123",
//     database:"database madilog"
// })

// app.get("/",(req,res)=>{
//     res.json("hello this is backend")
// })

// app.get("/agenda",(req,res)=>{
//     const q = "SELECT * FROM agenda"
//     db.query(q,(err,data)=>{
//         if(err) return res.json(err)
//             return res.json(data)
//     })
// })

// app.post("/agenda",(req,res)=>{
//     const q = "INSERT INTO agenda ('idagenda','tgl','tempat','jam','hari','deskripsi','kegiatan') values (?)"
//     const values = ["idagenda from backend","tgl from backend","tempat from backend","jam from backend","hari from backend","deskripsi from backend","kegiatan from backend"]

//     db.query(q,[values],(err,data)=>{
//         if(err) return res.json(err)
//             return res.json(data)

//     })
// })

// app.listen(8800,()=>{
//     console.log("connected to backend!")
// })