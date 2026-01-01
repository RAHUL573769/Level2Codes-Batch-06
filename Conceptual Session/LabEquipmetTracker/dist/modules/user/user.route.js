import express from 'express';
import { userController } from './user.controler';
const userRouter = express.Router();
userRouter.post("/register", userController.register);
export default userRouter;
//# sourceMappingURL=user.route.js.map