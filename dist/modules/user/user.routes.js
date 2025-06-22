"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const userRoutes = (0, express_1.Router)();
userRoutes.post("/userRegister", user_controller_1.registerUser);
userRoutes.get("/users", user_controller_1.getUser);
exports.default = userRoutes;
