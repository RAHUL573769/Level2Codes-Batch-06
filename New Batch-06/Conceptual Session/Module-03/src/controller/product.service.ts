import path from "path"
import fs from "fs"
const filePath = path.join(__dirname, "../../database/database.json");
export function productServices() {

    const data = fs.readFileSync(filePath, "utf-8")
    console.log(data.toString())
}


productServices()