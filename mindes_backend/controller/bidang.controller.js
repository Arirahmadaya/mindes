import { query } from "../database/db.js";

export const getBidang = async (req, res) => {
  try {
    const result = await query("SELECT * FROM bidangtable");
    return res.status(200).json({ success: true, data: result });
  } catch (e) {
    console.log("Terjadi kesalahan", e);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};

export const insertBidang = async (req, res) => {
  const { nama, parent_id } = req.body;
  try {
    await query("INSERT INTO bidangtable (nama, parent_id) VALUES (?, ?)", [nama, parent_id]);
    return res.status(200).json({ msg: "Bidang ditambahkan" });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};

export const updateBidang = async (req, res) => {
  const { id_bidang } = req.params;
  const { nama, parent_id } = req.body;
  try {
    await query("UPDATE bidangtable SET nama = ?, parent_id = ? WHERE id_bidang = ?", [nama, parent_id, id_bidang]);
    return res.status(200).json({ msg: "Bidang diperbarui" });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};

export const deleteBidang = async (req, res) => {
  const { id_bidang } = req.params;
  try {
    // Check if there are any child rows
    const childRows = await query("SELECT * FROM bidangtable WHERE parent_id = ?", [id_bidang]);
    if (childRows.length > 0) {
      return res.status(400).json({ msg: "Cannot delete this row because it has child rows. Please delete or update the child rows first." });
    }

    await query("DELETE FROM bidangtable WHERE id_bidang = ?", [id_bidang]);
    return res.status(200).json({ msg: "Bidang dihapus" });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};
