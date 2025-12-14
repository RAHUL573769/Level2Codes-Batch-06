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
const catSchema = new mongoose_1.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        unique: true,
    },
    age: {
        type: Number,
    },
    color: {
        type: String,
    },
    secret: {
        type: String,
    },
});
/* ======================
   STATIC METHODS
====================== */
catSchema.statics.generateIdStatic = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const lastCat = yield this.findOne().sort({ id: -1 }).exec();
        if (!lastCat) {
            return 1;
        }
        return lastCat.id + 1;
    });
};
/* ======================
   INSTANCE METHODS
====================== */
catSchema.methods.generateId = function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Generate ID instance method');
    });
};
/* ======================
   PRE MIDDLEWARE
====================== */
catSchema.pre('save', function () {
    return __awaiter(this, void 0, void 0, function* () {
        if (this.secret) {
            this.secret = yield bcrypt_1.default.hash(this.secret, 12);
        }
    });
});
/* ======================
   POST MIDDLEWARE
====================== */
catSchema.post('save', function (doc, next) {
    // console.log('Saved Cat:', doc)
    doc.secret = "Password is Hashed";
    next();
});
exports.Cat = (0, mongoose_1.model)('Cat', catSchema);
