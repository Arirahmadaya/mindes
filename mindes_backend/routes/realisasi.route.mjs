import express from 'express'
import { getRealisasi, getRealisasiById, insertRealisasi,  updateRealisasi, deleteRealisasi  } from '../controller/realisasi.controller.mjs'
// import { authenticateToken } from '../middleware/validate.middleware.js'

const router = express.Router()

router.get('/realisasi', getRealisasi)
router.get('/realisasi/:id_realisasi', getRealisasiById)
router.post('/realisasi/create', insertRealisasi)
router.put('/realisasi/:id_realisasi', updateRealisasi)
router.delete('/realisasi/:id_realisasi', deleteRealisasi)


export default router