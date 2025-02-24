import express from "express";
import { createPoubelle, updatePoubelle, deletePoubelle, findByPoubelleId,getPoubelles } from "../controllers/poubelle.controller";
import { authenticateToken } from "../middlewares/authMiddleware";
const router = express.Router();

 
router.get("/poubelles", getPoubelles);
router.post("/poubelles", createPoubelle);
router.put("/poubelles/:id", updatePoubelle);
router.delete("/poubelles/:id", deletePoubelle);
router.get("/poubelles/:id", findByPoubelleId);

export default router;
