import { query } from "../database/db.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// multer configurasi
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/img_berita"));
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

export const getBerita = async (req, res) => {
  try {
    const result = await query(`
            SELECT 
            beritatable.id_berita,
            beritatable.id_kategori,
            beritatable.tgl,
            beritatable.judul,
            beritatable.artikel,
            beritatable.status,
            beritatable.img_berita,
            kategoritable.nama
        FROM 
            beritatable
        JOIN 
            kategoritable ON beritatable.id_kategori = kategoritable.id_kategori;
            `);
    return res.status(200).json({ success: true, data: result });
  } catch (e) {
    console.log("Terjadi kesalahan", e);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};

export const insertBerita = [
  // multer({ storage: storage }).single("img_berita"),
  upload.single("img_berita"), // Multer middleware for single file upload
  async (req, res) => {
    console.log(req.body);
    const { tgl, judul, artikel, id_kategori, status } = req.body;
    let img_berita = null;

    if (req.file) {
      img_berita = `/img_berita/${req.file.filename}`;
    }

    try {
      await query(
        "INSERT INTO beritatable(tgl, judul, artikel, id_kategori, status, img_berita) values (?, ?, ?, ?, ?, ?)",
        [tgl, judul, artikel, id_kategori, status, img_berita]
      );
      return res.status(200).json({ msg: "Berita ditambahkan" });
    } catch (error) {
      console.log("Terjadi kesalahan", error);
      return res.status(500).json({ msg: "terjadi kesalahan pada server" });
    }
  },
];

export const updateBerita = async (req, res) => {
  // console.log(req.params)
  const { tgl, judul, artikel, id_kategori, status, img_berita } = req.body;
  const { id_berita } = req.params;
  try {
    await query(
      "UPDATE beritatable SET tgl = ?, judul = ?, artikel = ?, id_kategori = ?, status = ?, img_berita = ? WHERE id_berita = ?",
      [tgl, judul, artikel, id_kategori, status, img_berita, id_berita]
    );
    return res.status(200).json({ msg: "Berita diubah" });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};

export const deleteBerita = async (req, res) => {
  const { id } = req.params;
  try {
    await query("DELETE FROM beritatable where id=?", [id]);
    return res.status(200).json({ msg: "User Dihapus" });
  } catch (error) {
    console.log("Terjadi kesalahan", e);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};

export const getBeritaById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await query("Select * from beritatable where id=?", [id]);
    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};
