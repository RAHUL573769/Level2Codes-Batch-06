import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  PORT: process.env.PORT as string,
  DB_LOCAL: process.env.DB_LOCAL as string,
};
