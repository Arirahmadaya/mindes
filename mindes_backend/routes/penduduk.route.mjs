import express from 'express'
import { getPenduduk, getPendudukById, insertPenduduk,  updatePenduduk, deletePenduduk,  } from '../controller/penduduk.controller.mjs'
// import { authenticateToken } from '../middleware/validate.middleware.js'

const router = express.Router()

router.get('/penduduk', getPenduduk)
router.get('/penduduk/:id_penduduk', getPendudukById)
router.post('/penduduk/create', insertPenduduk)
router.put('/penduduk/:id_penduduk', updatePenduduk)
router.delete('/penduduk/:id_penduduk', deletePenduduk)


export default router