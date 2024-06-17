import express from 'express'
import { getUser, getUserById, insertUser,  updateUser, deleteUser  } from '../controller/user.controller.js'
// import { authenticateToken } from '../middleware/validate.middleware.js'

const router = express.Router()

router.get('/user', getUser)
router.get('/user/:id_user', getUserById)
router.post('/user/create', insertUser)
router.put('/user/:id_user', updateUser)
router.delete('/user/:id_user', deleteUser)


export default router