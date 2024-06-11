import express from 'express'
import { getUser, getUserById, insertUser, getUserTest, updateUser, deleteUser,  } from '../controller/user.controller.js'
import { authenticateToken } from '../middleware/validate.middleware.js'

const router = express.Router()

router.get('/user', getUser)
router.get('/user/:id', getUserById)
router.post('/user/create', insertUser)
router.get('/userfilter', getUserTest)
router.put('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)


export default router