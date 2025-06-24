import { Request, Response } from "express";
import User from "./user.model";

export const registerUser = async (req: Request, res: Response) => {
  const payload = req.body;
  const user = new User(payload);
  await user.save();
  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: user,
  });
};

export const getUser = async (req: Request, res: Response) => {
  const user = await User.find();
  res.status(201).json({
    success: true,
    message: "All users read successfully",
    data: user,
  });
};

export const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }
    res.json({ success: true, data: user });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching user", error });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updated = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }
    res.json({
      success: true,
      message: "User updated successfully",
      data: updated,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error updating user", error });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await User.findByIdAndDelete(id);
    if (!deleted) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }
    res.json({
      success: true,
      message: "User deleted successfully",
      data: deleted,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error deleting user", error });
  }
};
