import { Router } from "express";
import { registerUser } from "./user.controller";

const userRoutes = Router();

userRoutes.post("/userRegister", registerUser);

export default userRoutes;