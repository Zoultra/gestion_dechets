import express from "express";
import { getClients, createUser, updateUser, deleteUser, findById, loginUser, getChauffeurs, getAdmins } from "../controllers/user.controller";
import { authenticateToken } from "../middlewares/authMiddleware";
const router = express.Router();

router.get("/clients", getClients);
router.post("/clients", createUser);
router.put("/clients/:id", updateUser);
router.delete("/clients/:id", deleteUser);
router.get("/clients/:id", findById);
router.post("/clients/login", loginUser);

router.get("/chauffeurs", getChauffeurs);
router.get("/admins", getAdmins);
 

export default router;
