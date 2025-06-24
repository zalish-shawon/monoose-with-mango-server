import { Router } from "express";
import {
  getUser,
  registerUser,
  getSingleUser,
  updateUser,
  deleteUser,
} from "./user.controller";

const userRoutes = Router();

userRoutes.post("/userRegister", registerUser);
userRoutes.get("/users", getUser);
userRoutes.get("/user/:id", getSingleUser);
userRoutes.put("/user/:id", updateUser);
userRoutes.delete("/user/:id", deleteUser);

export default userRoutes;
