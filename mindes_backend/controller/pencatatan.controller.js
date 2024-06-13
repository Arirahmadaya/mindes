import { query } from "../database/db.js";

export const getPencatatan = async (req, res) => {
  try {
    const result = await query(`SELECT * FROM pencatatantable`);
    // const result = await query(`
    // SELECT 
    //     pencatatantable.id_pencatatan,
    //     pencatatantable.no,
    //     pencatatantable.nominal,
    //     pencatatantable.total,
    //     pencatatantable.id_realisasi,
    //     realisasitable.*
    // FROM 
    //     pencatatantable
    // JOIN 
    //     realisasitable ON pencatatantable.id_realisasi = realisasitable.id_realisasi
    // JOIN
    //     akuntable ON pencatatantable.kode = akuntable.kode;
    // `);
    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};
export const insertPencatatan = async (req, res) => {
  console.log(req.body);
  const { no, kode, nominal, total, id_realisasi } = req.body;

  try {
    // Validasi kode di akuntable dan dapatkan id_akun
    const akunResult = await query(
      "SELECT id_akun FROM akuntable WHERE kode = ?",
      [kode]
    );
    if (akunResult.length === 0) {
      return res.status(400).json({ msg: "Kode akun tidak ditemukan" });
    }

    const id_akun = akunResult[0].id_akun;

    // Validasi id_realisasi di realisasitable
    const realisasiResult = await query(
      "SELECT * FROM realisasitable WHERE id_realisasi = ?",
      [id_realisasi]
    );
    if (realisasiResult.length === 0) {
      return res.status(400).json({ msg: "ID realisasi tidak ditemukan" });
    }

    // Insert data ke pencatatantable dengan id_akun yang sesuai
    await query(
      "INSERT INTO pencatatantable (no, kode, nominal, total, id_realisasi) VALUES (?, ?, ?, ?, ?)",
      [no, id_akun, nominal, total, id_realisasi]
    );
    return res.status(200).json({ msg: "Pencatatan ditambahkan" });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res
      .status(500)
      .json({ msg: "Terjadi kesalahan pada server", error: error.message });
  }
};

export const updatePencatatan = async (req, res) => {
  const { no, kode, nominal, total, id_realisasi } = req.body;
  const { id_pencatatan } = req.params;

  try {
    // Validasi kode di akuntable dan dapatkan id_akun
    const akunResult = await query(
      "SELECT id_akun FROM akuntable WHERE kode = ?",
      [kode]
    );
    if (akunResult.length === 0) {
      return res.status(400).json({ msg: "Kode akun tidak ditemukan" });
    }

    const id_akun = akunResult[0].id_akun;

    // Validasi id_realisasi di realisasitable
    const realisasiResult = await query(
      "SELECT * FROM realisasitable WHERE id_realisasi = ?",
      [id_realisasi]
    );
    if (realisasiResult.length === 0) {
      return res.status(400).json({ msg: "ID realisasi tidak ditemukan" });
    }

    // Update data di pencatatantable dengan id_akun yang sesuai
    await query(
      `UPDATE pencatatantable 
       SET no = ?, kode = ?, nominal = ?, total = ?, id_realisasi = ?
       WHERE id_pencatatan = ?`,
      [no, id_akun, nominal, total, id_realisasi, id_pencatatan]
    );
    return res.status(200).json({ msg: "Pencatatan diubah" });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};

export const getPencatatanById = async (req, res) => {
  const { id_realisasi } = req.params;
  try {
    const result = await query(
      `SELECT 
         pencatatantable.id_pencatatan,
         pencatatantable.no,
         pencatatantable.nominal,
         pencatatantable.total,
         pencatatantable.id_realisasi,
         realisasitable.*,
         akuntable.kode
       FROM 
         pencatatantable
       JOIN 
         realisasitable ON pencatatantable.id_realisasi = realisasitable.id_realisasi
       JOIN
         akuntable ON pencatatantable.kode = akuntable.id_akun
       WHERE
         pencatatantable.id_realisasi = ?`,
      [id_realisasi]
    );

    if (result.length === 0) {
      return res.status(404).json({ msg: "Pencatatan tidak ditemukan" });
    }

    const groupedResult = result.reduce((acc, pencatatan) => {
      const { id_realisasi, ...data } = pencatatan;
      if (!acc[id_realisasi]) {
        acc[id_realisasi] = [];
      }
      acc[id_realisasi].push(data);
      return acc;
    }, {});

    return res.status(200).json({ success: true, data: groupedResult });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};

export const deletePencatatan = async (req, res) => {
  const { id_pencatatan } = req.params;
  try {
    await query("DELETE FROM pencatatantable WHERE id_pencatatan = ?", [
      id_pencatatan,
    ]);
    return res.status(200).json({ msg: "Pencatatan Dihapus" });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};
