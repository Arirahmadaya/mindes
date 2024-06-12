import { query } from "../database/db.js"

export const getBerita = async(req,res)=>{
    try{
        const result = await query('Select * from beritatable')
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const insertBerita = async(req,res)=>{
    // console.log(req.body);
    const { tgl, judul, artikel, id_kategori, status, img_berita, id_user }= req.body
    try {
        await query(
            "INSERT INTO beritatable(tgl, judul, artikel, id_kategori, status, img_berita, id_user) values (?, ?, ?, ?, ?, ?, ?)", [tgl, judul, artikel, id_kategori, status, img_berita, id_user]
        );
        return res.status(200).json({msg:"Berita ditambahkan"})
    } catch (error) {
        console.log("Terjadi kesalahan", error)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
};
// export const insertBerita = async(req,res)=>{
//     // console.log(req.body)
//     const { tgl, judul, artikel, id_kategori, status, img_berita, id_user }= req.body
//     try {
//         // const [user] = await query("SELECT id FROM usertable WHERE id = ?", [id_user]);
//         // if (!user) {
//         //     return res.status(400).json({ msg: "ID admin tidak valid" });
//         // }
//         await query(
//             "INSERT INTO beritatable(tgl, judul, artikel, id_kategori, status, img_berita, id_user) values (?, ?, ?, ?, ?, ?, ?)", [tgl, judul, artikel, id_kategori, status, img_berita, id_user]
//         );

//         return res.status(200).json({msg:"Berita ditambahkan"})
//     } catch (error) {
//         console.log("Terjadi kesalahan", e)
//         return res.status(500).json({msg:"terjadi kesalahan pada server"})
//     }
// };

// export const updateBerita = async(req,res)=>{
//     const {tgl, judul, artikel, kategori, status, img_berita, id_user}= req.body
//     const {id}=req.params
//     try {
//         await query("UPDATE beritatable SET username=? where id=?", [username, id])
//         return res.status(200).json({msg:"User Diubah"})
//     } catch (error) {
//         console.log("Terjadi kesalahan", e)
//         return res.status(500).json({msg:"terjadi kesalahan pada server"})
//     }
// }

export const updateBerita = async (req, res) => {
    // console.log(req.params)
    const { tgl, judul, artikel, id_kategori, status, img_berita, id_user } = req.body;
    const { id_berita } = req.params;
    try {
        await query(
            "UPDATE beritatable SET tgl = ?, judul = ?, artikel = ?, id_kategori = ?, status = ?, img_berita = ?, id_user = ? WHERE id_berita = ?",
            [tgl, judul, artikel, id_kategori, status, img_berita, id_user, id_berita]
        );
        return res.status(200).json({ msg: "Berita diubah" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};


export const deleteBerita = async(req,res)=>{
    const {id}=req.params
    try {
        await query("DELETE FROM beritatable where id=?", [id])
        return res.status(200).json({msg:"User Dihapus"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
};

export const getBeritaById = async(req,res)=>{
    const {id}=req.params
    try{
        const result = await query('Select * from beritatable where id=?', [id])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
};


// export const insertBerita = async (req, res) => {
//     const { id_berita, judul_berita, isi_berita, img_berita, id_admin } = req.body;
//     try {
//         // Validasi id_admin ada di tabel admin
//         const [admin] = await query("SELECT id_admin FROM admin WHERE id_admin = ?", [id_admin]);
//         if (!admin) {
//             return res.status(400).json({ msg: "ID admin tidak valid" });
//         }

//         await query("INSERT INTO berita (id_berita, judul_berita, isi_berita, img_berita, id_admin) VALUES (?, ?, ?, ?, ?)", [id_berita, judul_berita, isi_berita, img_berita, id_admin]);
//         return res.status(200).json({ msg: "Berita ditambahkan" });
//     } catch (error) {
//         console.log("Terjadi kesalahan", error);
//         return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
//     }
// };