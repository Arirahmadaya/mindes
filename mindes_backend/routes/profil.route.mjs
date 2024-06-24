import express from 'express'
import { getProfil, getProfilById, insertProfil, updateProfil } from '../controller/profil.controller.mjs'
// import { authenticateToken } from '../middleware/validate.middleware.js'

const router = express.Router()

router.get('/profil', getProfil)
router.get('/profil/:id_profil', getProfilById)
router.post('/profil/create', insertProfil)
router.put('/profil/:id_profil', updateProfil)

export default router