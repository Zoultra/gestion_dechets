import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
 

const prisma = new PrismaClient();
 
const TOKEN_KEY = process.env.TOKEN_KEY || "default_secret";

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await prisma.user.findMany(); // ✅ Remplace UserModel.findAll()
        res.json({ success: true, message: "Affichage de la liste des utilisateurs", data: users });
    } catch (error) {
        res.status(500).json({ message: "Erreur du serveur", error });
        next(error);
    }
};



export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try { 
        const id = Number(req.params.id); // ✅ Conversion propre en number
        const { username, email, password } = req.body;

        const updatedUser = await prisma.user.update({
            where: { id },
            data: { username, email, password },
        });

        res.json({ success: true, data: updatedUser, message: "Utilisateur mis à jour avec succès" });
    } catch (error) {
        res.status(500).json({ message: "Erreur du serveur", error });
        next(error);
    }

    
};
 

 


export const createUser = async (req: Request, res: Response) => {
    try {
        
        const { password, ...userData } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        
      
      const user = await prisma.user.create({
        data: { ...userData, password: hashedPassword},
      });
  
      res.status(201).json({ message: "Votre compte a été créé", user });
    } catch (error: any) {
      if (error.code === "P2002") {
        // Erreur de contrainte unique sur un champ (ex: email)
        res.status(400).json({
          message: "Cet email est déjà utilisé. Veuillez en choisir un autre.",
        });
      } else {
        res.status(500).json({ message: "Erreur du serveur", error });
      }
    }
  };

 

  export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = Number(req.params.id); // Convertir en nombre
 
        // Vérifier si l'utilisateur existe
        const user = await prisma.user.findUnique({ where: { id } });

        if (user) {
            res.status(204).send();
          } else {
            res.status(404).json({ message: 'Utilisateur non trouvé' });
          }
        // Supprimer l'utilisateur
        await prisma.user.delete({ where: { id } });

        res.json({ success: true, message: "Utilisateur supprimé avec succès" });
    } catch (error) {
        res.status(500).json({ message: "Erreur du serveur", error });
        next(error);
    }
};
 
 
 

  export const findById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = Number(req.params.id);
        const user = await prisma.user.findUnique({ where: { id } });
          if (user) {
            res.json({ success: true, message: "Affichage de la liste des utilisateurs", data: user });
          } else {
            res.status(404).json({ message: 'Utilisateur non trouvé' });
          }
    } catch (error) {
        res.status(500).json({ message: "Erreur du serveur", error });
        next(error);
    }
};

 


export const loginUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { username, password } = req.body;
  
      const user = await prisma.user.findUnique({ where: { username } });
      if (!user) {
        res.status(404).json({ message: "Utilisateur non trouvé" });
        return;
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(400).json({ message: "Mot de passe incorrect" });
        return;
      }
  
      const token = jwt.sign({ idUser: user.id, username }, TOKEN_KEY, { expiresIn: "120s" });
  
      res.status(200).json({ message: "Connexion réussie", user, token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur du serveur", error });
    }
  };