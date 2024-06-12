import express from 'express'
import { getPencatatan, getPencatatanById, insertPencatatan,  updatePencatatan, deletePencatatan,  } from '../controller/pencatatan.controller.js'
import { authenticateToken } from '../middleware/validate.middleware.js'

const router = express.Router()

router.get('/pencatatan', getPencatatan)
router.get('/pencatatan/:id_pencatatan', getPencatatanById)
router.post('/pencatatan/create', insertPencatatan)
router.put('/pencatatan/:id_pencatatan', updatePencatatan)
router.delete('/user/:id_pencatatan', deletePencatatan)


export default router