import express from 'express'
import { getAkun, insertAkun, deleteAkun, updateAkun } from '../controller/akun.controller.js'
// import { authenticateToken } from '../middleware/validate.middleware.js'

const router = express.Router()

router.get('/akun', getAkun)
router.post('/akun/create', insertAkun)
router.delete('/akun/:id_akun', deleteAkun)
router.put("/akun/:id_akun", updateAkun); 


export default router