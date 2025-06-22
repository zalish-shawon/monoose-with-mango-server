import { Request, Response } from "express";
import Mango from "./mango.model";

export const addMango = async (req: Request, res: Response) => {
    const payload = req.body;
    const mango = new Mango(payload);
    await mango.save();
    res.status(201).json({
        success: true,
        message: "Mango added successfully",
        data: mango,
    });
};