import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes";
import userPoubelle from "./routes/poubelle.routes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", userPoubelle);
 

// ⛔ Middleware de gestion des erreurs (après les routes)
app.use(errorHandler);

export default app;
