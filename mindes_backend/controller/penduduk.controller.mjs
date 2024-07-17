import { query } from "../database/db.mjs";

export const getPenduduk = async (req, res) => {
  try {
    const result = await query('SELECT * FROM penduduktable');
    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};

export const insertPenduduk = async (req, res) => {
  const { tgl, jumlah, mutasi, keterangan } = req.body;
  try {
    await query(
      "INSERT INTO penduduktable (tgl, jumlah, mutasi, keterangan) VALUES (?, ?, ?, ?)",
      [tgl, jumlah, mutasi, keterangan]
    );
    return res.status(200).json({ msg: "Mutasi ditambahkan" });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};

export const updatePenduduk = async (req, res) => {
  const { tgl, jumlah, mutasi, keterangan } = req.body;
  const { id_penduduk } = req.params;
  try {
    await query(
      "UPDATE penduduktable SET tgl=?, jumlah=?, mutasi=?, keterangan=? WHERE id_penduduk=?",
      [tgl, jumlah, mutasi, keterangan, id_penduduk]
    );
    return res.status(200).json({ msg: "Mutasi diubah" });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};

export const deletePenduduk = async (req, res) => {
  const { id_penduduk } = req.params;
  try {
    await query("DELETE FROM penduduktable WHERE id_penduduk=?", [id_penduduk]);
    return res.status(200).json({ msg: "Mutasi dihapus" });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};

export const getPendudukById = async (req, res) => {
  const { id_penduduk } = req.params;
  try {
    const result = await query('SELECT * FROM penduduktable WHERE id_penduduk=?', [id_penduduk]);
    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};
