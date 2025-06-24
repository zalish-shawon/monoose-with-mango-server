import { Request, Response } from "express";
import Mango from "./mango.model";

export const addMango = async (req: Request, res: Response) => {
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

export const updateMango = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updated = await Mango.findByIdAndUpdate(id, req.body, { new: true });
        if (!updated) {
            return res.status(404).json({ success: false, message: "Mango not found" });
        }
        res.json({ success: true, message: "Mango updated successfully", data: updated });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error updating mango", error });
    }
};

export const deleteMango = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deleted = await Mango.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ success: false, message: "Mango not found" });
        }
        res.json({ success: true, message: "Mango deleted successfully", data: deleted });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error deleting mango", error });
    }
};

export const getSingleMango = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const mango = await Mango.findById(id);
        if (!mango) {
            return res.status(404).json({ success: false, message: "Mango not found" });
        }
        res.json({ success: true, data: mango });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching mango", error });
    }
};