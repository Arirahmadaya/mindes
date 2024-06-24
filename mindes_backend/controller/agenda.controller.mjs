import { query } from "../database/db.mjs"

export const getAgenda = async(req,res)=>{
    try{
        const result = await query('Select * from agendatable')
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", error)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const insertAgenda = async(req,res)=>{
    const {tgl, tempat, jam, hari, deskripsi, kegiatan, status}= req.body
    try {
        await query("INSERT INTO agendatable (tgl, tempat, jam, hari, deskripsi, kegiatan, status) values (?, ?, ?, ?, ?, ?, ? )", [tgl , tempat, jam, hari, deskripsi, kegiatan, status])
        return res.status(200).json({msg:"Agenda ditambahkan"})
    } catch (error) {
        console.log("Terjadi kesalahan", error)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const updateAgenda = async(req,res)=>{
    const {tgl, tempat, jam, hari, deskripsi, kegiatan, status}= req.body
    const {id_agenda}=req.params
    try {
        await query("UPDATE agendatable SET tgl = ?, tempat = ?, jam = ?, hari = ?, deskripsi = ?, kegiatan = ?, status = ? WHERE id_agenda = ?", [tgl, tempat, jam, hari, deskripsi, kegiatan, status, id_agenda])
        return res.status(200).json({msg:"Agenda Diubah"})
    } catch (error) {
        console.log("Terjadi kesalahan", error)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const deleteAgenda = async(req,res)=>{
    const {id_agenda}=req.params
    try {
        await query("DELETE FROM agendatable where id_agenda=?", [id_agenda])
        return res.status(200).json({msg:"Agenda Dihapus"})
    } catch (error) {
        console.log("Terjadi kesalahan", error)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const getAgendaById = async(req,res)=>{
    const {id_agenda}=req.params
    try{
        const result = await query('Select * from agendatable where id_agenda=?', [id_agenda])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", error)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}