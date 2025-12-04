import { Request, Response } from "express";
import { pool } from "../database/database";

const createUserIntoDb = async (name: string, email: string) => {


    const result = await pool.query(
        `INSERT INTO users(name, email) VALUES($1, $2) RETURNING *`,
        [name, email]
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
