// import db from "../Database/Db.js";

// export const getList = async (req, res) => {
//   const query = "SELECT * FROM list";
//   db.query(query, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// };

// export const addList = async (req, res) => {
//   const query = "INSERT INTO list (`name`,`link`) VALUES (?)";
//   const values = [req.body.name, req.body.link];
//   db.query(query, [values], (err, data) => {
//     if (err) return res.json(err);
//     return res.json("berhasil ditambahkan!");
//   });
// };

// export const deletedList = async (req, res) => {
//   const list = req.params.id;
//   const query = "DELETE FROM list WHERE id = ?";

//   db.query(query, [list], (err, data) => {
//     if (err) return res.json(err);
//     return res.json("buku berhasil dihapus");
//   });
// };

// export const updateList = async (req, res) => {
//   const list = req.params.id;
//   const query = "UPDATE list SET `name` = ?, `link` = ? WHERE id = ?";

//   const values = [req.body.name, req.body.link];

//   db.query(query, [...values, list], (err, data) => {
//     if (err) return res.json(err);
//     return res.json("buku berhasil diupdate");
//   });
// };
