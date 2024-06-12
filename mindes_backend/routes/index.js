import express from 'express'
import agendaRoute from './agenda.route.js'
import akunRoute from './akun.route.js'
import beritaRoute from './berita.route.js'
import bidangRoute from './bidang.route.js'
import kategoriRoute from './kategori.route.js'
import pencatatanRoute from './pencatatan.route.js'
import pendudukRoute from './penduduk.route.js'
import profilRoute from './profil.route.js'
import userRoute from './user.route.js'

import realisasiRoute from './realisasi.route.js'

import authRoute from './auth.route.js'
import { authenticateToken } from '../middleware/validate.middleware.js'
import passport from 'passport'
// import "../middleware/passport.js"

const router = express()
router.use(agendaRoute)
router.use(akunRoute)
router.use(beritaRoute)
router.use(bidangRoute)
router.use(kategoriRoute)
router.use(pencatatanRoute)
router.use(pendudukRoute)
router.use(profilRoute)
router.use(userRoute)

router.use(realisasiRoute)

// router.use(authenticateToken,userRoute)
// router.use(passport.authenticate('jwt', {session:false}),userRoute)
// router.use(authRoute)


export default router
