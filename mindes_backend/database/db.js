import mysql from 'mysql2/promise'
import 'dotenv/config'

const db = mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
})

const testConnection=async()=>{
    try{
        await db.getConnection()
        console.log("Success");
    }catch(e){
        console.log("Failed")
    }
}

const query = async (query,value)=>{
    try{
        const [result] = await db.query(query, value??[])
        return result
    }catch(e){
        console.log("Failed")
    }
}

export {testConnection,query}