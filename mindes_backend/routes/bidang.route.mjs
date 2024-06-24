import express from 'express'
import { getBidang, insertBidang,  deleteBidang  } from '../controller/bidang.controller.mjs'
// import { authenticateToken } from '../middleware/validate.middleware.js'

const router = express.Router()

router.get('/bidang', getBidang)
router.post('/bidang/create', insertBidang)
router.delete('/bidang/:id_bidang', deleteBidang)


export default router