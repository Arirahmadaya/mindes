import { query } from "../database/db.mjs";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// multer configurasi
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/img_realisasi"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage });

export const getRealisasi = async (req, res) => {
  try {
    const result = await query(`
    SELECT 
        realisasitable.id_realisasi,
        realisasitable.id_bidang,
        realisasitable.kode_kegiatan,
        realisasitable.kegiatan,
        realisasitable.output,
        realisasitable.status,
        realisasitable.lokasi,
        realisasitable.img_realisasi1,
        realisasitable.img_realisasi2,
        realisasitable.sumber,
        realisasitable.pembiayaan,
        realisasitable.tgl_mulai,
        realisasitable.tgl_selesai,
        bidangtable.nama
    FROM 
        realisasitable
    JOIN 
        bidangtable ON realisasitable.id_bidang = bidangtable.id_bidang;
    `);
    return res.status(200).json({ success: true, data: result });
  } catch (e) {
    console.log("Terjadi kesalahan", e);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};

export const insertRealisasi = [
  upload.fields([
    { name: "img_realisasi1", maxCount: 1 },
    { name: "img_realisasi2", maxCount: 1 },
  ]),
  async (req, res) => {
    // console.log(req.body);
    const {
      id_bidang,
      kode_kegiatan,
      kegiatan,
      output,
      status,
      lokasi,
      sumber,
      pembiayaan,
      tgl_mulai,
      tgl_selesai,
    } = req.body;

    let img_realisasi1 = null;
    let img_realisasi2 = null;

    if (req.files.img_realisasi1) {
      img_realisasi1 = `/img_realisasi/${req.files.img_realisasi1[0].filename}`;
    }

    if (req.files.img_realisasi2) {
      img_realisasi2 = `/img_realisasi/${req.files.img_realisasi2[0].filename}`;
    }

    try {
      await query(
        "INSERT INTO realisasitable (id_bidang, kode_kegiatan, kegiatan, output, status, lokasi, img_realisasi1, img_realisasi2, sumber, pembiayaan, tgl_mulai, tgl_selesai) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          id_bidang,
          kode_kegiatan,
          kegiatan,
          output,
          status,
          lokasi,
          img_realisasi1,
          img_realisasi2,
          sumber,
          pembiayaan,
          tgl_mulai,
          tgl_selesai,
        ]
      );
      return res.status(200).json({ msg: "Realisasi ditambahkan" });
    } catch (error) {
      console.log("Terjadi kesalahan", error);
      return res.status(500).json({ msg: "terjadi kesalahan pada server" });
    }
  },
];

export const updateRealisasi = [
  upload.fields([
    { name: "img_realisasi1", maxCount: 1 },
    { name: "img_realisasi2", maxCount: 1 },
  ]),
  async (req, res) => {
    const {
      id_bidang,
      kode_kegiatan,
      kegiatan,
      output,
      status,
      lokasi,
      sumber,
      pembiayaan,
      tgl_mulai,
      tgl_selesai,
    } = req.body;

    const { id_realisasi } = req.params;

    let img_realisasi1 = req.body.img_realisasi1;
    let img_realisasi2 = req.body.img_realisasi2;

    if (req.files.img_realisasi1) {
      img_realisasi1 = `/img_realisasi/${req.files.img_realisasi1[0].filename}`;
    }

    if (req.files.img_realisasi2) {
      img_realisasi2 = `/img_realisasi/${req.files.img_realisasi2[0].filename}`;
    }

    try {
      await query(
        `UPDATE realisasitable 
           SET id_bidang = ?, 
               kode_kegiatan = ?, 
               kegiatan = ?, 
               output = ?, 
               status = ?, 
               lokasi = ?, 
               img_realisasi1 = ?, 
               img_realisasi2 = ?, 
               sumber = ?, 
               pembiayaan = ?, 
               tgl_mulai = ?, 
               tgl_selesai = ? 
           WHERE id_realisasi = ?`,
        [
          id_bidang,
          kode_kegiatan,
          kegiatan,
          output,
          status,
          lokasi,
          img_realisasi1,
          img_realisasi2,
          sumber,
          pembiayaan,
          tgl_mulai,
          tgl_selesai,
          id_realisasi,
        ]
      );
      return res.status(200).json({ msg: "realisasi diubah" });
    } catch (error) {
      console.log("Terjadi kesalahan", error);
      return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
  },
];

export const deleteRealisasi = async (req, res) => {
  const { id_realisasi } = req.params;
  try {
    await query("DELETE FROM realisasitable where id_realisasi=?", [
      id_realisasi,
    ]);
    return res.status(200).json({ msg: "Realisasi Dihapus" });
  } catch (error) {
    console.log("Terjadi kesalahan", e);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};

export const getRealisasiById = async (req, res) => {
  const { id_realisasi } = req.params;
  try {
    const result = await query(
      "Select * from realisasitable where id_realisasi=?",
      [id_realisasi]
    );
    return res.status(200).json({ success: true, data: result });
  } catch (e) {
    console.log("Terjadi kesalahan", e);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};
