import express from "express";
import {
  getBerita,
  getBeritaById,
  insertBerita,
  updateBerita,
  deleteBerita,
  getBeritaImage,
  getRelatedBerita,
  incrementKunjungan,
} from "../controller/berita.controller.js";

const router = express.Router();

router.get("/berita", getBerita);
router.get("/berita/:id_berita", getBeritaById);
router.post("/berita/create", insertBerita);
router.put("/berita/:id_berita", updateBerita);
router.delete("/berita/:id_berita", deleteBerita);
router.get("/berita/img/:id_berita", getBeritaImage);
router.get("/berita/related", getRelatedBerita);
router.put("/berita/kunjungan/:id_berita", incrementKunjungan);

export default router;
