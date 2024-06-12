import { query } from "../database/db.js";

export const getPencatatan = async (req, res) => {
  try {
    const result = await query(`
    SELECT 
        pencatatantable.id_pencatatan,
        pencatatantable.no,
        pencatatantable.kode_akun,
        pencatatantable.nominal,
        pencatatantable.total,
        pencatatantable.id_realisasi,
        realisasitable.*
    FROM 
        pencatatantable
    JOIN 
        realisasitable ON pencatatantable.id_realisasi = realisasitable.id_realisasi;
    `);
    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};

export const insertPencatatan = async (req, res) => {
  const { no, kode_akun, nominal, total, id_realisasi } = req.body;

  try {
    await query(
      "INSERT INTO pencatatantable (no, kode_akun, nominal, total, id_realisasi) VALUES (?, ?, ?, ?, ?)",
      [no, kode_akun, nominal, total, id_realisasi]
    );
    return res.status(200).json({ msg: "Pencatatan ditambahkan" });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};

export const updatePencatatan = async (req, res) => {
  const { no, kode_akun, nominal, total, id_realisasi } = req.body;
  const { id_pencatatan } = req.params;

  try {
    await query(
      `UPDATE pencatatantable 
       SET no = ?, kode_akun = ?, nominal = ?, total = ?, id_realisasi = ?
       WHERE id_pencatatan = ?`,
      [no, kode_akun, nominal, total, id_realisasi, id_pencatatan]
    );
    return res.status(200).json({ msg: "Pencatatan diubah" });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};

export const deletePencatatan = async (req, res) => {
  const { id_pencatatan } = req.params;
  try {
    await query("DELETE FROM pencatatantable WHERE id_pencatatan = ?", [id_pencatatan]);
    return res.status(200).json({ msg: "Pencatatan Dihapus" });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};

export const getPencatatanById = async (req, res) => {
  const { id_pencatatan } = req.params;
  try {
    const result = await query("SELECT * FROM pencatatantable WHERE id_pencatatan = ?", [id_pencatatan]);
    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};
