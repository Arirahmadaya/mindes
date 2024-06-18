import { query } from "../database/db.js";

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

export const insertBerita = async (req, res) => {
  // console.log(req.body);
  const { tgl, judul, artikel, id_kategori, status, img_berita } = req.body;
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
};

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
