import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`));
