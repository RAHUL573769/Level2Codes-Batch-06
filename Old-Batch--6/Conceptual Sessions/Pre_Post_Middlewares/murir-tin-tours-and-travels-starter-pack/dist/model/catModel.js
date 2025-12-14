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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
// import config from '../config'
// const catSchema = new Schema<ICat, CatModel, ICatMethods>({
//   id: {
//     type: Number,
//     // required: true,
//     // unique: true,
//   },
//   name: {
//     type: String,
//     // required: true,
//   },
//   age: {
//     type: Number,
//   },
//   color: {
//     type: String,
//   },
//   secret: { type: String },
// })
//instance methods
// catSchema.methods.generateId = async function () {
//   try {
//     const lastCat = await Cat.find().sort({ _id: 1 }).exec()
//     if (!lastCat) {
//       return 1
//     }
//     return lastCat.id + 1
//   } catch (error) {
//     console.log('Error Found')
//   }
// }
// export const Cat = model<ICat, CatModel>('Cat', catSchema)
//static methods
const catSchema = new mongoose_1.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        unique: true,
        // required: true,
    },
    age: {
        type: Number,
    },
    color: {
        type: String,
    },
    secret: { type: String },
});
catSchema.statics.generateIdStatic = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const lastCat = yield exports.Cat.findOne().sort({ _id: -1 }).exec();
            if (!lastCat) {
                return 1;
            }
            return lastCat.id + 1;
        }
        catch (error) {
            console.log('Error Found');
        }
    });
};
//pre middle ware
catSchema.pre('save', function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            this.secret = yield bcrypt_1.default.hash(this.secret, 12);
        }
        catch (error) {
            console.log(error);
        }
    });
});
catSchema.post('save', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(this);
    });
});
exports.Cat = (0, mongoose_1.model)('Cat', catSchema);
