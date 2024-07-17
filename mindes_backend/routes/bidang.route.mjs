import express from "express";
import {
  getBidang,
  getBidangById,
  insertBidang,
  deleteBidang,
  updateBidang
} from "../controller/bidang.controller.mjs";

const router = express.Router();

router.get("/bidang", getBidang);
router.get("/bidang/:id_bidang", getBidangById);
router.post("/bidang", insertBidang);
router.delete("/bidang/:id_bidang", deleteBidang);
router.put("/bidang/:id_bidang", updateBidang);

export default router;
