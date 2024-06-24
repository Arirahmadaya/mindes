import express from "express";
import agendaRoute from "./agenda.route.mjs";
import akunRoute from "./akun.route.mjs";
import beritaRoute from "./berita.route.mjs";
import bidangRoute from "./bidang.route.mjs";
import kategoriRoute from "./kategori.route.mjs";
import pendudukRoute from "./penduduk.route.mjs";
import profilRoute from "./profil.route.mjs";
import userRoute from "./user.route.mjs";

import realisasiRoute from "./realisasi.route.mjs";
import pencatatanRoute from "./pencatatan.route.mjs";

// import authRoute from "./auth.route.mjs";
// import { authenticateToken } from "../middleware/validate.middleware.mjs";
// import passport from "passport";
// import "../middleware/passport.mjs"

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