import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const authenticateToken = (req,res,next)=>{
    const authHeader = req.headers['authorization']
    const token = authHeader&& authHeader.split(" ")[1]
    if(!token) return res.sendStatus(401)

    jwt.verify(token, process.env.SECRETKEY, (err, user)=>{
        if(err) return res.sendStatus(403)
        req.user=user //err, decode to , user
        next()    
    })
}

export {authenticateToken}