import express from 'express'
import { getAkun, insertAkun, deleteAkun } from '../controller/akun.controller.mjs'
// import { authenticateToken } from '../middleware/validate.middleware.js'

const router = express.Router()

router.get('/akun', getAkun)
router.post('/akun/create', insertAkun)
router.delete('/akun/:id_akun', deleteAkun)


export default router