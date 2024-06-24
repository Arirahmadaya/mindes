import { query } from "../database/db.mjs";

export const getProfil = async (req, res) => {
  try {
    const result = await query(`
            SELECT profiltable.id_profil, 
                   profiltable.id_user, 
                   profiltable.img_user, 
                   profiltable.hp, 
                   profiltable.nik,
                   usertable.email,
                   usertable.username,
                   usertable.password,
                   usertable.roles
            FROM profiltable
            JOIN usertable ON profiltable.id_user = usertable.id_user;
        `);
    return res.status(200).json({ success: true, data: result });
  } catch (e) {
    console.log("Terjadi kesalahan", e);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};

export const insertProfil = async (req, res) => {
  const { img_user, hp, nik, id_user } = req.body;
  try {
    await query(
      "INSERT INTO profiltable (img_user, hp, nik, id_user) values (?, ?, ?, ?)",
      [img_user, hp, nik, id_user]
    );
    return res.status(200).json({ msg: "Profil ditambahkan" });
  } catch (error) {
    console.log("Terjadi kesalahan", e);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};

export const updateProfil = async (req, res) => {
  const { username, password, email, img_user, hp, nik, id_user } = req.body;
  const { id_profil } = req.params;
  try {
    await query(
      "UPDATE profiltable SET username=?, password=?, email=?, img_user=?, hp=?, nik=?, id_user=? where id_profil=?",
      [username, password, email, img_user, hp, nik, id_user, id_profil]
    );
    return res.status(200).json({ msg: "User Diubah" });
  } catch (error) {
    console.log("Terjadi kesalahan", e);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};

export const getProfilById = async (req, res) => {
  const { id_profil } = req.params;
  try {
    const result = await query(
      `
        SELECT profiltable.id_profil, 
               profiltable.id_user, 
               profiltable.img_user, 
               profiltable.hp, 
               profiltable.nik,
               usertable.email,
               usertable.username,
               usertable.password,
               usertable.roles
        FROM profiltable
        JOIN usertable ON profiltable.id_user = usertable.id_user
        WHERE profiltable.id_profil = ?;
      `,
      [id_profil]
    );

    if (result.length === 0) {
      return res
        .status(404)
        .json({ success: false, msg: "Profil tidak ditemukan" });
    }

    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};
