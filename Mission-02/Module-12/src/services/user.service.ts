
import { pool } from "../database/database";
import bcrypt from 'bcrypt';
const createUserIntoDb = async (name: string, email: string, password: string, role: string) => {

    const hashedPassword = await bcrypt.hash(password as string, 10)
    console.log('hp', hashedPassword)
    const result = await pool.query(
        `INSERT INTO users(name, email,password,role) VALUES($1, $2,$3,$4) RETURNING *`,
        // [name, email, password]
        [name, email, hashedPassword, role]
    );

    return result

};

const getUsersFromDb = async (id: string) => {
    const result = await pool.query(
        "SELECT * FROM users WHERE id = $1",
        [id]
    );
    return result
}

export const UserServices = { createUserIntoDb, getUsersFromDb };
