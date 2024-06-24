import mysql from 'mysql2/promise';
import 'dotenv/config';

const db = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

const testConnection = async () => {
    try {
        await db.getConnection();
        console.log("Database connection successful");
    } catch (e) {
        console.error("Database connection failed:", e.message);
    }
};

const query = async (query, values = []) => {
    try {
        const [result] = await db.query(query, values);
        return result;
    } catch (e) {
        console.error("Query execution failed:", e.message);
        throw e; // Re-throw the error to propagate it to the caller
    }
};

export { testConnection, query };
