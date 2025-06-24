import { Request, Response, RequestHandler } from "express";
import Mango from "./mango.model";

export const addMango: RequestHandler = async (req, res) => {
    const payload = req.body;
    const mango = new Mango(payload);
    await mango.save();
    res.status(201).json({
        success: true,
        message: `${mango.name} Mango added successfully`,
        data: mango,
    });
    console.log(mango);
};

export const updateMango: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await Mango.findByIdAndUpdate(id, req.body, { new: true });
        if (!updated) {
            res.status(404).json({ success: false, message: "Mango not found" });
            return;
        }
        res.json({ success: true, message: "Mango updated successfully", data: updated });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error updating mango", error });
    }
};

export const deleteMango: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Mango.findByIdAndDelete(id);
        if (!deleted) {
            res.status(404).json({ success: false, message: "Mango not found" });
            return;
        }
        res.json({ success: true, message: "Mango deleted successfully", data: deleted });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error deleting mango", error });
    }
};

export const getSingleMango: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const mango = await Mango.findById(id);
        if (!mango) {
            res.status(404).json({ success: false, message: "Mango not found" });
            return;
        }
        res.json({ success: true, data: mango });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching mango", error });
    }
};



