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
    const {nama}= req.body
    try {
        await query("INSERT INTO beritatable(username) values (?)", [username])
        return res.status(200).json({msg:"User ditambahkan"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const updateBerita = async(req,res)=>{
    const {username}= req.body
    const {id}=req.params
    try {
        await query("UPDATE beritatable SET username=? where id=?", [username, id])
        return res.status(200).json({msg:"User Diubah"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const deleteBerita = async(req,res)=>{
    const {id}=req.params
    try {
        await query("DELETE FROM beritatable where id=?", [id])
        return res.status(200).json({msg:"User Dihapus"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const getBeritaById = async(req,res)=>{
    const {id}=req.params
    try{
        const result = await query('Select * from beritatable where id=?', [id])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}
