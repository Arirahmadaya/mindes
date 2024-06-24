import express from 'express'
import { getAgenda, getAgendaById, insertAgenda,  updateAgenda, deleteAgenda  } from '../controller/agenda.controller.mjs'
// import { authenticateToken } from '../middleware/validate.middleware.js'

const router = express.Router()

router.get('/agenda', getAgenda)
router.get('/agenda/:id_agenda', getAgendaById)
router.post('/agenda/create', insertAgenda)
router.put('/agenda/:id_agenda', updateAgenda)
router.delete('/agenda/:id_agenda', deleteAgenda)

export default router