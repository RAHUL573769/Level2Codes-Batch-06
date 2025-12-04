import { pool } from "../database/database"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const loginIntoDatabase = async (email: string, password: string) => {


    const result = pool.query(`SELECT * FROM users WHERE email=$1`, [email])
    if ((await result).rows.length === 0) {
        return null
    }
    const user = (await result).rows[0]
    const match = await bcrypt.compare(password, user.password)
    if (!match) {

        return false
    }
    const secret = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30'
    const token = jwt.sign({ name: user.name, email: user.email, role: user.role }, secret, {
        expiresIn: "7d"
    })
    console.log("Token", token)

    return { token, user }




}
export const AuthServices = { loginIntoDatabase }