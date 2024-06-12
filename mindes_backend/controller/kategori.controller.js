import { query } from '../database/db.js';  // Adjust the path to your query function

export const getKategori = async (req, res) => {
    try {
        const result = await query('SELECT * FROM kategoritable');
        return res.status(200).json({ success: true, data: result });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
}

export const insertKategori = async (req, res) => {
    // console.log(req)
    const { nama } = req.body;
    try {
        await query("INSERT INTO kategoritable (nama) VALUES (?)", [nama]);
        return res.status(200).json({ msg: "Kategori ditambahkan" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
}

export const deleteKategori = async (req, res) => {
    // console.log(req.params)
    const { id_kategori } = req.params;
    try {
        await query("DELETE FROM kategoritable WHERE id_kategori = ?", [id_kategori]);
        return res.status(200).json({ msg: "Kategori dihapus" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
}
