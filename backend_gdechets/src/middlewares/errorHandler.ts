import { Request, Response, NextFunction } from "express";

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error("❌ Erreur serveur :", err); // Log pour debug

    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Erreur interne du serveur",
    });
};
