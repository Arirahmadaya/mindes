import bcrypt from 'bcrypt';
import { query } from "../database/db.mjs";

export const getUser = async(req, res) => {
    try {
        const result = await query('Select * from usertable');
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "terjadi kesalahan pada server" });
    }
};

export const insertUser = async (req, res) => {
    const { username, password, email, roles } = req.body;
    try {
        // Enkripsi password sebelum menyimpannya
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await query("INSERT INTO usertable (username, password, email, roles) VALUES (?, ?, ?, ?)", [username, hashedPassword, email, roles]);
        return res.status(200).json({ msg: "User ditambahkan" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

// export const updateUser = async (req, res) => {
//     const { username, password, email, roles } = req.body;
//     const { id_user } = req.params;
//     try {
//         // Enkripsi password sebelum memperbaruinya
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         await query("UPDATE usertable SET username=?, password=?, email=?, roles=? WHERE id_user=?", [username, hashedPassword, email, roles, id_user]);
//         return res.status(200).json({ msg: "User Diubah" });
//     } catch (error) {
//         console.log("Terjadi kesalahan", error);
//         return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
//     }
// };

export const updateUser = async (req, res) => {
    const { username, password, email, roles } = req.body;
    const { id_user } = req.params;
    try {
        let hashedPassword = password;

        // Jika password diubah, enkripsi password baru
        if (password) {
            const salt = await bcrypt.genSalt(10);
            hashedPassword = await bcrypt.hash(password, salt);
        }

        await query("UPDATE usertable SET username=?, password=?, email=?, roles=? WHERE id_user=?", [username, hashedPassword, email, roles, id_user]);
        return res.status(200).json({ msg: "User Diubah" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const deleteUser = async (req, res) => {
    const { id_user } = req.params;
    try {
        await query("DELETE FROM usertable WHERE id_user=?", [id_user]);
        return res.status(200).json({ msg: "User Dihapus" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const getUserById = async (req, res) => {
    const { id_user } = req.params;
    try {
        const result = await query('Select * from usertable where id_user=?', [id_user]);
        return res.status(200).json({ success: true, data: result });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "terjadi kesalahan pada server" });
    }
};

export const getAuthenticatedUser = async (req, res) => {
    try {
        const result = await query('SELECT * FROM usertable WHERE id_user = ?', [req.user.id_user]);
        if (result.length === 0) {
            return res.status(404).json({ msg: "User not found" });
        }
        return res.status(200).json({ success: true, data: result[0] });
    } catch (e) {
        console.log("Terjadi kesalahan", e);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};

export const getTotalUsers = async (req, res) => {
    try {
        const [rows] = await query('SELECT COUNT(*) AS total FROM usertable');
        res.status(200).json({ success: true, total: rows[0].total });
    } catch (err) {
        res.status(500).json({ error: 'Database query failed' });
    }
};


// export const getProfile = async (req, res) => {
//     const userId = req.user.id_user;
//     try {
//       const result = await query('SELECT * FROM usertable WHERE id_user = ?', [userId]);
//       if (result.length === 0) {
//         return res.status(404).json({ success: false, message: "User not found" });
//       }
//       return res.status(200).json({ success: true, data: result });
//     } catch (e) {
//       console.log("Terjadi kesalahan", e);
//       return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
//     }
//   };

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
