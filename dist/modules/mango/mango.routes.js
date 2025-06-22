"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mango_controller_1 = require("./mango.controller");
const mangoRoutes = (0, express_1.Router)();
mangoRoutes.post("/mango", mango_controller_1.addMango);
exports.default = mangoRoutes;
