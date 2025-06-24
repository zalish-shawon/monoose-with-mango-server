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
exports.deleteUser = exports.updateUser = exports.getSingleUser = exports.getUser = exports.registerUser = void 0;
const user_model_1 = __importDefault(require("./user.model"));
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const user = new user_model_1.default(payload);
    yield user.save();
    res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: user,
    });
});
exports.registerUser = registerUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.find();
    res.status(201).json({
        success: true,
        message: "All users read successfully",
        data: user,
    });
});
exports.getUser = getUser;
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield user_model_1.default.findById(id);
        if (!user) {
            res.status(404).json({ success: false, message: "User not found" });
            return;
        }
        res.json({ success: true, data: user });
    }
    catch (error) {
        res
            .status(500)
            .json({ success: false, message: "Error fetching user", error });
    }
});
exports.getSingleUser = getSingleUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updated = yield user_model_1.default.findByIdAndUpdate(id, req.body, { new: true });
        if (!updated) {
            res.status(404).json({ success: false, message: "User not found" });
            return;
        }
        res.json({
            success: true,
            message: "User updated successfully",
            data: updated,
        });
    }
    catch (error) {
        res
            .status(500)
            .json({ success: false, message: "Error updating user", error });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleted = yield user_model_1.default.findByIdAndDelete(id);
        if (!deleted) {
            res.status(404).json({ success: false, message: "User not found" });
            return;
        }
        res.json({
            success: true,
            message: "User deleted successfully",
            data: deleted,
        });
    }
    catch (error) {
        res
            .status(500)
            .json({ success: false, message: "Error deleting user", error });
    }
});
exports.deleteUser = deleteUser;
