import express from "express";
import {
  getKategori,
  insertKategori,
  deleteKategori,
} from "../controller/kategori.controller.js";
// import { authenticateToken } from '../middleware/validate.middleware.js'

const router = express.Router();

router.get("/kategori", getKategori);
router.post("/kategori/create", insertKategori);
router.delete("/kategori/:id", deleteKategori);

export default router;
