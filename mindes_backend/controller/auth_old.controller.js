import { query } from "../database/db.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const register = async(req,res)=>{
    const {username, password, confPassword} = req.body

    if(username===""||username===undefined||password===""||password===undefined||confPassword===""||confPassword===undefined){
        return res.status(400).json({error:"Field must not be empty"})
    }

    if (password!==confPassword){
        return res.status(400).json({error:"Password not match"})
    }

    try {
        const salt = await bcrypt.genSalt(12)
        const hash = await bcrypt.hash(password,salt)
        await query("INSERT INTO authtable(,password) values (?,?)", [username, hash])
        return res.status(200).json({username, hash})
    } catch (error) {
        return res.status(500).json({error:"Terjadi kesalahan"})
    }
}


const login = async(req,res)=>{
    const {username, password:inputPass} = req.body
    // TODO Validasi username dan password
    try {
        const [validation] =await query("select id from user where username=?", [username])
        
        if(validation===undefined){
            return res.status(400).json({error:"User not found"})
        }
        const [check] = await query ("select id, username, password from user where id=?", [validation.id])
        const isMatch = await bcrypt.compare(inputPass, check.password)
        if(!isMatch){
            return res.status(400).json({error:"Password is wrong"})
        }

        const data ={
            id:check.id,
            username:check.username
        }

        jwt.sign(data, process.env.SECRETKEY, (err,token)=>{
            if(err) throw err
            return res.status(200).json({Authorization:`Bearer ${token}`})    
        })

        
    } catch (error) {
        return res.status(500).json({error:"Terjadi kesalahan"})
    }
}

export {register,login}