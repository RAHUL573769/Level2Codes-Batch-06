import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
    PORT: process.env.PORT as string,
    POSTGRES_DATABASE: process.env.POSTGRES_DATABASE

};
