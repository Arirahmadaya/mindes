import { query } from "../database/db.js"

export const getUser = async(req,res)=>{
    try{
        const result = await query('Select * from usertable')
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const insertUser = async (req, res) => {
    // console.log(req.body);  // Log the request body to the console
    const {username, password, email,roles } = req.body;
    try {
        await query("INSERT INTO usertable (username, password, email, roles) VALUES (?, ?, ?, ?)", [username, password, email, roles]);
        return res.status(200).json({ msg: "User ditambahkan" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const updateUser = async(req,res)=>{
    const {username, password, email, roles}= req.body
    const {id_user}=req.params
    try {
        await query("UPDATE usertable SET username=?, password=?, email=?, roles=? where id_user=?", [username, password, email, roles, id_user])
        return res.status(200).json({msg:"User Diubah"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const deleteUser = async(req,res)=>{
    const {id_user} = req.params;
    try {
        await query("DELETE FROM usertable where id_user=?", [id_user])
        return res.status(200).json({msg:"User Dihapus"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}


export const getUserById = async(req,res)=>{
    const {id_user}=req.params
    try{
        const result = await query('Select * from usertable where id_user=?', [id_user])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

// export const getUserTest = async(req,res)=>{
//     const {id_user, username} = req.query
//     console.log(id, username)
//     console.log("Terpanggil")
//     try{
//         const result = await query('Select * from usertable where id_user=?', [id,username])
//         return res.status(200).json({success:true, data:result})
//     }catch(e){
//         console.log("Terjadi kesalahan", e)
//         return res.status(500).json({msg:"terjadi kesalahan pada server"})
//     }
// }
