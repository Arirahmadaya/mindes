import express from 'express'
import { getPencatatan, getPencatatanById, insertPencatatan,  updatePencatatan, deletePencatatan,  } from '../controller/pencatatan.controller.mjs'

const router = express.Router()

router.get('/pencatatan', getPencatatan)
router.get('/pencatatan/:id_realisasi', getPencatatanById)
router.post('/pencatatan/create', insertPencatatan)
router.put('/pencatatan/:id_pencatatan', updatePencatatan)
router.delete('/pencatatan/:id_pencatatan', deletePencatatan)


export default router 
