import { pool } from "../database/db"
import bcrypt from 'bcrypt';


const createUserIntoDb = async (payload: Record<string, unknown>) => {

    const { name, email, password, role } = payload

    const hashedPassword = await bcrypt.hash(password as string, 12)

    console.log(hashedPassword)
    const result = await pool.query(`INSERT INTO users(name,email,password,role) VALUES($1,$2,$3,$4) RETURNING *
        `, [name, email, hashedPassword, role])
    delete result.rows[0].password
    return result


}

export const UserServices = { createUserIntoDb }