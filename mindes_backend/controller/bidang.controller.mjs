import { query } from "../database/db.mjs";

export const getBidang = async (req, res) => {
  try {
    const result = await query("SELECT * FROM bidangtable");
    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};


export const getBidangById = async (req, res) => {
  const { id_bidang } = req.params;
  try {
    const result = await query("SELECT * FROM bidangtable WHERE id_bidang = ?", [id_bidang]);
    if (result.length === 0) {
      return res.status(404).json({ msg: "Bidang tidak ditemukan" });
    }
    return res.status(200).json({ success: true, data: result[0] });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};

export const insertBidang = async (req, res) => {
  const { nama, parent_id } = req.body;
  try {
    await query("INSERT INTO bidangtable (nama, parent_id) VALUES (?, ?)", [nama, parent_id]);
    return res.status(200).json({ msg: "Bidang ditambahkan" });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};

export const deleteBidang = async (req, res) => {
  const { id_bidang } = req.params;
  try {
    const result = await query("DELETE FROM bidangtable WHERE id_bidang = ?", [id_bidang]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: "Bidang tidak ditemukan" });
    }
    return res.status(200).json({ msg: "Bidang dihapus" });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};

export const updateBidang = async (req, res) => {
  const { id_bidang } = req.params;
  const { nama, parent_id } = req.body;
  try {
    const result = await query("UPDATE bidangtable SET nama = ?, parent_id = ? WHERE id_bidang = ?", [nama, parent_id, id_bidang]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: "Bidang tidak ditemukan" });
    }
    return res.status(200).json({ msg: "Bidang diperbarui" });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};
