import passport from "passport";
import passportJwt from "passport-jwt"
import dotenv from 'dotenv'
import { query } from "../database/db.js";

dotenv.config()

const JwtStrategy = passportJwt.Strategy
const extractJwt = passportJwt.ExtractJwt

const options ={
    secretOrKey:process.env.SECRETKEY,
    jwtFromRequest:extractJwt.fromAuthHeaderAsBearerToken()
}

passport.use(new JwtStrategy(options, async(payload, done)=>{
    const {id} = payload
    const [getData] = await query("select id, username from user where id=?", [id])
    if (getData){
        return done(null, getData)
    }else{
        return done (null, false)
    }
}))