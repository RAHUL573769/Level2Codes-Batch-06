import express, { NextFunction, Request, Response } from "express";
import { Pool } from "pg";
import { logger } from "./middleware/middleware";
import { initDb, pool } from "./database/database";
import { UserRoute } from "./router/user.route";

const port = 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("/getUsers", UserRoute.router)
// app.use("/createUsers", UserRoute.router)

app.use("/users", UserRoute)
initDb();



// ========================
//     GET USER BY ID
// ========================





app.get("/users/:id", logger, async (req: Request, res: Response) => {
  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE id = $1",
      [req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: result.rows[0]
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: "Server error" });
  }
});

// ========================
//     CREATE USER
// ========================





// ========================
//     GET ALL USERS
// ========================
app.get("/users", async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM users");

    return res.status(200).json({
      success: true,
      count: result.rows.length,
      data: result.rows,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: "Server error" });
  }
});
app.put("/users/:id", async (req: Request, res: Response) => {


  const query = await pool.query(``)
})
app.listen(port, () => {
  console.log(`Server is listening on port ${port} `);
});
