import { Request, Response } from "express";
import User from "./user.model";

export const registerUser = async(req: Request, res: Response) => {
    const payload = req.body;
    const user = new User(payload);
    await user.save();
    res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: user,
    });
};