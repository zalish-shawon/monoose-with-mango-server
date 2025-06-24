"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mangoSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: String,
        required: true,
    },
    origin: {
        type: String,
        required: true,
    },
    session: {
        type: String,
        enum: ["Summer", "Winter"],
        required: true,
    },
}, {
    timestamps: true,
});
const Mango = (0, mongoose_1.model)("Mango", mangoSchema);
exports.default = Mango;
