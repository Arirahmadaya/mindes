import express from 'express'
import userRoute from './user.route.js'
// import authRoute from './auth.route.js'
// import { authenticateToken } from '../middleware/validate.middleware.js'
// import passport from 'passport'
// import "../middleware/passport.js"

const router = express()

router.use(userRoute)
// router.use(authenticateToken,userRoute)
// router.use(passport.authenticate('jwt', {session:false}),userRoute)
// router.use(authRoute)


export default router
