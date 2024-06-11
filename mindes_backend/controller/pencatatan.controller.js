import { query } from "../database/db.js"

export const getPencatatan = async(req,res)=>{
    try{
        const result = await query('Select * from usertable')
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const insertPencatatan = async(req,res)=>{
    const {nama}= req.body
    try {
        await query("INSERT INTO usertable (username, password) values (?, ?, ?)", [username , email, password])
        return res.status(200).json({msg:"User ditambahkan"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const updatePencatatan = async(req,res)=>{
    const {username}= req.body
    const {id}=req.params
    try {
        await query("UPDATE usertable SET username=? where id=?", [username, id])
        return res.status(200).json({msg:"User Diubah"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const deletePencatatan = async(req,res)=>{
    const {id}=req.params
    try {
        await query("DELETE FROM usertable where id=?", [id])
        return res.status(200).json({msg:"User Dihapus"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const getPencatatanById = async(req,res)=>{
    const {id}=req.params
    try{
        const result = await query('Select * from usertable where id=?', [id])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

// export const getUserTest = async(req,res)=>{
//     const {id, username} = req.query
//     console.log(id, username)
//     console.log("Terpanggil")
//     try{
//         const result = await query('Select * from usertable where id=?', [id,username])
//         return res.status(200).json({success:true, data:result})
//     }catch(e){
//         console.log("Terjadi kesalahan", e)
//         return res.status(500).json({msg:"terjadi kesalahan pada server"})
//     }
// }
