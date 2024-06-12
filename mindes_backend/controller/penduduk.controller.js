import { query } from "../database/db.js"

export const getPenduduk = async(req,res)=>{
    try{
        const result = await query('Select * from penduduktable')
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const insertPenduduk = async(req,res)=>{
    const {jumlah, mutasi, keterangan}= req.body
    try {
        await query("INSERT INTO penduduktable (jumlah, mutasi, keterangan) values (?, ?, ?)", [jumlah , mutasi, keterangan])
        return res.status(200).json({msg:"Mutasi ditambahkan"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const updatePenduduk = async(req,res)=>{
    const {jumlah, mutasi, keterangan}= req.body
    const {id_penduduk}=req.params
    try {
        await query("UPDATE penduduktable SET jumlah=?, mutasi=?, keterangan=? where id_penduduk=?", [jumlah, mutasi, keterangan, id_penduduk])
        return res.status(200).json({msg:"Mutasi Diubah"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const deletePenduduk = async(req,res)=>{
    const {id_penduduk}=req.params
    try {
        await query("DELETE FROM penduduktable where id_penduduk=?", [id_penduduk])
        return res.status(200).json({msg:"Mutasi Dihapus"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const getPendudukById = async(req,res)=>{
    const {id_penduduk}=req.params
    try{
        const result = await query('Select * from penduduktable where id_penduduk=?', [id_penduduk])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}
