import express from 'express'
import { getBerita, getBeritaById, insertBerita,  updateBerita, deleteBerita,  } from '../controller/berita.controller.js'
import { authenticateToken } from '../middleware/validate.middleware.js'

const router = express.Router()

router.get('/berita', getBerita)
router.get('/berita/:id_berita', getBeritaById)
router.post('/berita/create', insertBerita)
router.put('/berita/:id_berita', updateBerita)
router.delete('/berita/:id_berita', deleteBerita)


export default router