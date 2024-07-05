import express from 'express'
import { getUser, getUserById, insertUser,  updateUser, deleteUser, getAuthenticatedUser  } from '../controller/user.controller.mjs'
import passport from 'passport'

const router = express.Router()

router.get('/user', getUser)
router.get('/user/:id_user', getUserById)
router.post('/user/create', insertUser)
router.put('/user/:id_user', updateUser)
router.delete('/user/:id_user', deleteUser)

router.get('/profile', passport.authenticate('jwt', { session: false }), getAuthenticatedUser);

export default router