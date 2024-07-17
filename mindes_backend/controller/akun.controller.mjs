import { query } from "../database/db.mjs";

export const getAkun = async (req, res) => {
  try {
    const result = await query('SELECT * FROM akuntable');
    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};

export const getAkunById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await query('SELECT * FROM akuntable WHERE id_akun = ?', [id]);
    if (result.length === 0) {
      return res.status(404).json({ msg: "Akun tidak ditemukan" });
    }
    return res.status(200).json({ success: true, data: result[0] });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};

export const insertAkun = async (req, res) => {
  const { kode, uraian } = req.body;
  try {
    await query("INSERT INTO akuntable (kode, uraian) VALUES (?, ?)", [kode, uraian]);
    return res.status(200).json({ msg: "Akun ditambahkan" });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};

export const updateAkun = async (req, res) => {
  const { id } = req.params;
  const { kode, uraian } = req.body;
  try {
    const result = await query("UPDATE akuntable SET kode = ?, uraian = ? WHERE id_akun = ?", [kode, uraian, id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: "Akun tidak ditemukan" });
    }
    return res.status(200).json({ msg: "Akun diperbarui" });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};

export const deleteAkun = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await query("DELETE FROM akuntable WHERE id_akun = ?", [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: "Akun tidak ditemukan" });
    }
    return res.status(200).json({ msg: "Akun dihapus" });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};
