import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const authenticateToken = (req,res,next)=>{
    const authHeader = req.headers['authorization']
    const token = authHeader&& authHeader.split(" ")[1]
    if(!token) return res.sendStatus(401)
    jwt.verify(token, process.env.SECRETKEY, (err, decoded)=>{
        if(err) return res.sendStatus(403)
        req.user=decoded
        next()    
    })
}

export {authenticateToken}