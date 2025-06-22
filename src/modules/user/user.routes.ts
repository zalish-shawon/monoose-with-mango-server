import { Router } from "express";
import { getUser, registerUser } from "./user.controller";

const userRoutes = Router();

userRoutes.post("/userRegister", registerUser);
userRoutes.get("/users", getUser);

export default userRoutes;