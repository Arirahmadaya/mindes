import mysql from 'mysql2/promise'
import 'dotenv/config'

const db = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE
})

const testConnection=async()=>{
    try{
        await db.getConnection()
        console.log("Berhasil");
    }catch(e){
        console.log("GAGAL")
    }
}

const query = async (query,value)=>{
    try{
        const [result] = await db.query(query, value??[])
        return result
    }catch(e){
        console.log("GAGAL")
    }
}

export {testConnection, query}