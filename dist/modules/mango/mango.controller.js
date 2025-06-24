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
exports.getSingleMango = exports.deleteMango = exports.updateMango = exports.addMango = void 0;
const mango_model_1 = __importDefault(require("./mango.model"));
const addMango = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const mango = new mango_model_1.default(payload);
    yield mango.save();
    res.status(201).json({
        success: true,
        message: `${mango.name} Mango added successfully`,
        data: mango,
    });
    console.log(mango);
});
exports.addMango = addMango;
const updateMango = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updated = yield mango_model_1.default.findByIdAndUpdate(id, req.body, { new: true });
        if (!updated) {
            res.status(404).json({ success: false, message: "Mango not found" });
            return;
        }
        res.json({ success: true, message: "Mango updated successfully", data: updated });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Error updating mango", error });
    }
});
exports.updateMango = updateMango;
const deleteMango = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleted = yield mango_model_1.default.findByIdAndDelete(id);
        if (!deleted) {
            res.status(404).json({ success: false, message: "Mango not found" });
            return;
        }
        res.json({ success: true, message: "Mango deleted successfully", data: deleted });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Error deleting mango", error });
    }
});
exports.deleteMango = deleteMango;
const getSingleMango = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const mango = yield mango_model_1.default.findById(id);
        if (!mango) {
            res.status(404).json({ success: false, message: "Mango not found" });
            return;
        }
        res.json({ success: true, data: mango });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Error fetching mango", error });
    }
});
exports.getSingleMango = getSingleMango;
