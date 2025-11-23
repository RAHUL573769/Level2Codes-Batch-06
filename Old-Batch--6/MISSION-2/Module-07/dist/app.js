"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (_req, res) => {
    res.send("Hello From Js");
});
app.post("/", (req, res) => {
    console.log(req.body);
    res.send("Hello From Js");
});
exports.default = app;
//# sourceMappingURL=app.js.map