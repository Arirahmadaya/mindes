import mysql from 'mysql2/promise';
import 'dotenv/config'

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:"",
    database:"db_sql1",
})

async function testConnection() {
    try{
        await db.getConnection()
        console.log("Koneksi ke database berhasil!");
    }catch(error){
        console.log("Gagal terhubung ke database:", error)
    }
}

async function query (command, values){
    try{
        const [value] = await db.query(command, value??[])
        return value;
    }catch(error){
        console.error(error)
    }
}

export {query, testConnection};