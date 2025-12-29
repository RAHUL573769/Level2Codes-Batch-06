"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_route_1 = require("./routes/user.route");
const tour_route_1 = require("./routes/tour.route");
const app = (0, express_1.default)();
// const userRouter = express.Router()
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// app.get('/api/v1/users', (req: Request, res: Response) => {
//   const users = [
//     {
//       id: 1,
//       name: 'Rahul',
//       email: 'rahul@gmail.com',
//     },
//   ]
//   res.status(200).json({
//     message: 'User Data Fetched Successfully',
//     status: 'Success',
//     data: users,
//   })
// })
// app.use('/api/v1', userRouter)
app.use('/api/v1/users', user_route_1.UserRouter);
app.use('/api/v1/tours', tour_route_1.TourRouter);
// userRouter.get('/users')
exports.default = app;
