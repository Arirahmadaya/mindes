import express from "express";
import {
  getAkun,
  getAkunById,
  insertAkun,
  updateAkun,
  deleteAkun
} from "../controller/akun.controller.mjs";

const router = express.Router();

// Route to get all accounts
router.get("/akun", getAkun);

// Route to get a account by ID
router.get("/akun/:id", getAkunById);

// Route to create a new account
router.post("/akun", insertAkun);

// Route to update a account by ID
router.put("/akun/:id", updateAkun);

// Route to delete a account by ID
router.delete("/akun/:id", deleteAkun);

export default router;
