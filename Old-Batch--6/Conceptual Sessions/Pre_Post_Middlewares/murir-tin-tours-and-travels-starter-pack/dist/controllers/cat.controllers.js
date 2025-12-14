"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatController = void 0;
const cat_services_1 = require("../services/cat.services");
const createCatController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const data1 = yield cat_services_1.CatServices.addCat(data);
        res.status(200).json({
            message: 'Cat Data Created',
            success: true,
            data: data1,
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message || 'Something went Wrong',
            success: false,
            error: error,
        });
    }
});
const getCatController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield cat_services_1.CatServices.getCat();
        // console.log(data)
        res.status(200).json({
            message: 'Cat Data Created',
            success: true,
            data: data,
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Fetched Failed',
            status: false,
            error: error,
        });
    }
});
exports.CatController = { createCatController, getCatController };
