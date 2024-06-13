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
    const {id_user} = payload
    const [getData] = await query("select id_user, username from user where id_user=?", [id_user])
    if (getData){
        return done(null, getData)
    }else{
        return done (null, false)
    }
}))