import { prisma } from "../../lib/prisma";
const register = async (req, res) => {
    console.log("Register Working");
    const payload = req.body;
    const user = await prisma.user.create({
        data: payload
    });
    res.send({ message: "Registed User Sucessfully", data: user });
};
export const userController = { register };
//# sourceMappingURL=user.controler.js.map