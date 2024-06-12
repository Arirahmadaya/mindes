import { query } from "../database/db.js";

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

export const insertRealisasi = async (req, res) => {
  // console.log(req.body);
  const {
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
  } = req.body;

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
};

export const updateRealisasi = async (req, res) => {
  const {
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
  } = req.body;

  const { id_realisasi } = req.params;

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
};

export const deleteRealisasi = async (req, res) => {
  const { id_realisasi } = req.params;
  try {
    await query("DELETE FROM realisasitable where id_realisasi=?", [id_realisasi]);
    return res.status(200).json({ msg: "Realisasi Dihapus" });
  } catch (error) {
    console.log("Terjadi kesalahan", e);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};

export const getRealisasiById = async (req, res) => {
  const { id_realisasi } = req.params;
  try {
    const result = await query("Select * from realisasitable where id_realisasi=?", [id_realisasi]);
    return res.status(200).json({ success: true, data: result });
  } catch (e) {
    console.log("Terjadi kesalahan", e);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};

