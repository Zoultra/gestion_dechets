import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const TOKEN_KEY = process.env.TOKEN_KEY || "default_secret";

interface AuthenticatedRequest extends Request {
  user?: JwtPayload | string; // Ajout de la propriété `user`
}

export const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Accès refusé. Token non fourni." });
    return; // ✅ Assure que la fonction s'arrête ici
  }

  jwt.verify(token, TOKEN_KEY, (err, user) => {
    if (err) {
      res.status(403).json({ message: "Token invalide." });
      return; // ✅ Arrête l'exécution après l'erreur
    }

    req.user = user; // ✅ Stocke l'utilisateur dans la requête
    next(); // ✅ Passe au middleware suivant
  });
};
