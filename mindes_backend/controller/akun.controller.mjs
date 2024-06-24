import { query } from "../database/db.mjs"

export const getAkun = async(req,res)=>{
    try{
        const result = await query('Select * from akuntable')
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const insertAkun = async (req, res) => {
    const { kode, uraian } = req.body;
    try {
        await query("INSERT INTO akuntable (kode, uraian) values (?, ?)", [kode, uraian]);
        return res.status(200).json({ msg: "Akun ditambahkan" });
    } catch (error) {
        console.log("Terjadi kesalahan", error); // Changed variable name from `e` to `error`
        return res.status(500).json({ msg: "terjadi kesalahan pada server" });
    }
};


export const deleteAkun = async(req,res)=>{
    const {id_akun}=req.params
    try {
        await query("DELETE FROM akuntable where id_akun=?", [id_akun])
        return res.status(200).json({msg:"Akun Dihapus"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}