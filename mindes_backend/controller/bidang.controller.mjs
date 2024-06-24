import { query } from "../database/db.mjs";

export const getBidang = async (req, res) => {
  try {
    const result = await query("Select * from bidangtable");
    return res.status(200).json({ success: true, data: result });
  } catch (e) {
    console.log("Terjadi kesalahan", e);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};

export const insertBidang = async (req, res) => {
//   console.log(req)
  const { nama, parent_id } = req.body;
  try {
    await query("INSERT INTO bidangtable (nama, parent_id) values (?, ?)", [nama, parent_id]);
    return res.status(200).json({ msg: "Bidang ditambahkan" });
  } catch (error) {
    console.log("Terjadi kesalahan", e);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};

export const deleteBidang = async (req, res) => {
  const { id_bidang } = req.params;
  try {
    await query("DELETE FROM bidangtable where id_bidang=?", [id_bidang]);
    return res.status(200).json({ msg: "Bidang Dihapus" });
  } catch (error) {
    console.log("Terjadi kesalahan", e);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};
