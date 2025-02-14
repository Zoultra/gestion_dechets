import express from "express";
import { getUsers, createUser, updateUser, deleteUser, findById, loginUser } from "../controllers/user.controller";
import { authenticateToken } from "../middlewares/authMiddleware";
const router = express.Router();

router.get("/liste", getUsers);
router.post("/ajouter", createUser);
router.put("/modification/:id", updateUser);
router.delete("/suppression/:id",authenticateToken, deleteUser);
router.get("/recherche/:id", findById);
router.post("/login", loginUser);

export default router;
