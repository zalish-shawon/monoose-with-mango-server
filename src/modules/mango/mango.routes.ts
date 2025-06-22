import { Router } from "express";
import { addMango } from "./mango.controller";

const mangoRoutes = Router();

mangoRoutes.post("/mango", addMango);

export default mangoRoutes;