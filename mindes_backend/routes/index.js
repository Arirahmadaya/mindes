import express from "express";
import agendaRoute from "./agenda.route.js";
import akunRoute from "./akun.route.js";
import beritaRoute from "./berita.route.js";
import bidangRoute from "./bidang.route.js";
import kategoriRoute from "./kategori.route.js";
import pendudukRoute from "./penduduk.route.js";
import profilRoute from "./profil.route.js";
import userRoute from "./user.route.js";

import realisasiRoute from "./realisasi.route.js";
import pencatatanRoute from "./pencatatan.route.js";

// import authRoute from "./auth.route.js";
// import { authenticateToken } from "../middleware/validate.middleware.js";
// import passport from "passport";
// import "../middleware/passport.js"

const router = express.Router();

router.use(agendaRoute);
router.use(akunRoute);
router.use(beritaRoute);
router.use(bidangRoute);
router.use(kategoriRoute);
router.use(pendudukRoute);
router.use(profilRoute);
router.use(userRoute);

router.use(realisasiRoute);
router.use(pencatatanRoute);

//register tetep jalan kalau ini di// tapi kalau ada auth da kehambat
// router.use(passport.authenticate('jwt', {session:false})) //untuk route yang membutuhkan autentication
// router.use(passport.authenticate('jwt', {session:false}), userRoute) //untuk route yang membutuhkan autentication
// router.use(authRoute)

export default router;