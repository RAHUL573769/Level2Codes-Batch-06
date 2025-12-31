import app from "./app";
import { prisma } from "./lib/prisma";

const port = process.env.PORT || 5000
async function server() {

    try {
        await prisma.$disconnect()
    } catch (error) {

    }
    app.listen(port, () => {
        console.log(`Server is listening ${port}`)
    })
}
server()