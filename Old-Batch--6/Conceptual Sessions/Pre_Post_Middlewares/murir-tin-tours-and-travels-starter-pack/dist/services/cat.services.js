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
exports.CatServices = void 0;
const catModel_1 = require("../model/catModel");
// const addCat = async function (catData: ICat): Promise<ICat> {
//   // const result = await Cat.create(catData)
//   const result = new Cat(catData)
//   const id = await result.generateId()
//   console.log('Id', id)
//   return result
// }
const addCat = (catData) => __awaiter(void 0, void 0, void 0, function* () {
    // generate id using static method
    const id = yield catModel_1.Cat.generateIdStatic();
    // attach id
    const cat = new catModel_1.Cat(Object.assign(Object.assign({}, catData), { id }));
    // const data = cat.ge
    // save to DB
    const result = yield cat.save();
    console.log(yield catModel_1.Cat.generateIdStatic());
    console.log('Id:', id);
    // console.log('Result:', result)
    return result;
});
const getCat = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield catModel_1.Cat.find();
    return data;
});
exports.CatServices = { addCat, getCat };
