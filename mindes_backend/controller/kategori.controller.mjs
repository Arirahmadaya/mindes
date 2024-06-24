import { query } from '../database/db.mjs';  // Adjust the path to your query function

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
    // console.log(req.body)
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
    const { id } = req.params;
    try {
        console.log(`Executing query: DELETE FROM kategoritable WHERE id_kategori = ${id}`);
        const result = await query(`DELETE FROM kategoritable WHERE id_kategori = ?`, [id]);
        console.log(`Query Result: `, result);

        if (!result) {
            console.log('Query result is undefined or null.');
            return res.status(500).json({ msg: "Query failed to execute properly" });
        }

        if (result.affectedRows === 0) {
            console.log(`No rows affected. The category with id ${id} might not exist.`);
            return res.status(404).json({ msg: "Kategori tidak ditemukan" });
        }

        console.log(`Category with id ${id} deleted successfully.`);
        return res.status(200).json({ msg: "Kategori dihapus" });
    } catch (error) {
        console.log("Terjadi kesalahan:", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};


export const updateKategori = async (req, res) => {
    const { id } = req.params;
    const { nama } = req.body;
    try {
        const result = await query("UPDATE kategoritable SET nama = ? WHERE id_kategori = ?", [nama, id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ msg: "Kategori tidak ditemukan" });
        }
        return res.status(200).json({ msg: "Kategori diperbarui" });
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};