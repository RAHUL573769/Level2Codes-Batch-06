import { pool } from "../database/db";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"
const loginInToDb = async (email: string, password: string) => {
    const user = await pool.query(`
        SELECT * FROM users WHERE email=$1
        
        
        `, [email])

    const matchPassword = await bcrypt.compare(password, user.rows[0].password)

    if (user.rows.length === 0) {
        throw new Error("NoUser Found")
    } if (!matchPassword) {
        throw new Error("Wrong Password")
    }

    const JwtPayload = {

        id: user.rows[0].id,
        name: user.rows[0].name,
        email: user.rows[0].email
    }
    const secret = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30"
    const token = jwt.sign(JwtPayload, secret, { expiresIn: "7d" })
    // console.log("UsER", user)
    // console.log("MatchPassword", matchPassword)

    // console.log("Token", token)

    return { token, user: user.rows[0] }


}


export const AuthService = { loginInToDb }