import express from "express";
import {
  getBidang,
  insertBidang,
  deleteBidang,
  updateBidang
} from "../controller/bidang.controller.js";

const router = express.Router();

router.get("/bidang", getBidang);
router.post("/bidang/create", insertBidang);
router.delete("/bidang/:id_bidang", deleteBidang);
router.put("/bidang/:id_bidang", updateBidang);

export default router;
