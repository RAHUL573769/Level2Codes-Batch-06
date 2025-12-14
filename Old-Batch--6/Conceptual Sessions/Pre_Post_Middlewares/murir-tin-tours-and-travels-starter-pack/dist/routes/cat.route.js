"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.catRouter = void 0;
const express_1 = __importDefault(require("express"));
const cat_controllers_1 = require("../controllers/cat.controllers");
const router = express_1.default.Router();
router.post('/create-router', cat_controllers_1.CatController.createCatController);
router.get('/', cat_controllers_1.CatController.getCatController);
exports.catRouter = router;
