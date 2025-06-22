"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (email) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            },
            message: "Please enter a valid email address",
        }
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (phone) {
                return /^\d{10}$/.test(phone);
            },
            message: "Please enter a valid phone number",
        }
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function (password) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);
            },
            message: "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.",
        }
    },
    role: {
        type: String,
        enum: ["Admin", "Customer"],
        default: "Customer",
        required: true,
    },
}, {
    timestamps: true,
});
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
