import { Router } from "express";
import { addMango, deleteMango, getSingleMango, updateMango } from "./mango.controller";


const mangoRoutes = Router();

mangoRoutes.post("/mango", addMango);
mangoRoutes.put("/mango/:id", updateMango);
mangoRoutes.delete("/mango/:id", deleteMango);
mangoRoutes.get("/mango/:id", getSingleMango);

export default mangoRoutes;