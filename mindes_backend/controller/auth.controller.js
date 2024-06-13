import { query } from "../database/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const register = async (req, res) => {
  const { username, password, confPassword } = req.body;

  // Validasi input kosong
  if (!username || !password || !confPassword) {
    return res.status(400).json({ error: "Field must not be empty" });
  }

  // Validasi konfirmasi password
  if (password !== confPassword) {
    return res.status(400).json({ error: "Password not match" });
  }

  try {
    // Check if the username already exists
    const [existingUser] = await query(
      "SELECT * FROM usertable WHERE username = ?",
      [username]
    );
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);

    // Insert ke database dengan roles default 'umum'
    await query(
      "INSERT INTO usertable (username, password, roles) VALUES (?, ?, 'umum')",
      [username, hash]
    );

    return res.status(200).json({ username });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
};

const login = async (req, res) => {
  const { username, password: inputPass } = req.body;

  if (!username || !inputPass) {
    return res.status(400).json({ error: "Field must not be empty" });
  }

  try {
    const [user] = await query(
      "SELECT id_user, username, password, roles FROM usertable WHERE username = ?",
      [username]
    );
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const isMatch = await bcrypt.compare(inputPass, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Password is wrong" });
    }

    const payload = {
      id_user: user.id_user,
      username: user.username,
      roles: user.roles,
    };

    jwt.sign(
      payload,
      process.env.SECRETKEY,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        return res.status(200).json({ Authorization: `Bearer ${token}` });
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
};

export { register, login };
