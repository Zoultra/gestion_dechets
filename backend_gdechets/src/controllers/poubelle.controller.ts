import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { console } from "inspector";

const prisma = new PrismaClient();


// Controller Poubelles ---------------------------------------------------------------------------------------

export const getPoubelles = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const poubelles = await prisma.poubelleConnectee.findMany({ include: {
          user: true, // Inclure les données du client associé
        },}); // ✅ Remplace UserModel.findAll()
        
        res.json({ success: true, message: "Affichage de la liste des poubelles", data: poubelles });

    } catch (error) {
        res.status(500).json({ message: "Erreur du serveur", error });
        next(error);
    }
};


export const updatePoubelle = async (req: Request, res: Response, next: NextFunction) => {
  try { 
      const id = Number(req.params.id); // ✅ Conversion propre en number
      const {niveauRemplissage, etat, capteurID, adresse, localisation,userId } = req.body;

      const updatedPoubelle = await prisma.poubelleConnectee.update({
          where: { id },
          data: {niveauRemplissage, etat, capteurID, adresse, localisation, userId },
      });

      res.json({ success: true, data: updatedPoubelle, message: "Utilisateur mis à jour avec succès" });
  } catch (error) {
      res.status(500).json({ message: "Erreur du serveur", error });
      next(error);
  }

  
};



export const createPoubelle = async (req: Request, res: Response) => {
  try {
      
      const {...poubelleData } = req.body;
      
      const poubelle = await prisma.poubelleConnectee.create({
      data: { ...poubelleData},
    });

    res.status(201).json({ message: "La poubelle a été créé", poubelle });
  } catch (error: any) {
    if (error.code === "P2002") {
      // Erreur de contrainte unique sur un champ (ex: email)
      res.status(400).json({
        message: "Ce capteur est déjà utilisé. Veuillez en choisir un autre.",
      });
    } else {
      res.status(500).json({ message: "Erreur du serveur", error });
      console.log(res)
    }
  }
};



export const deletePoubelle = async (req: Request, res: Response, next: NextFunction) => {
  try {
      const id = Number(req.params.id); // Convertir en nombre

      // Vérifier si l'utilisateur existe
      const poubelle = await prisma.poubelleConnectee.findUnique({ where: { id } });

      if (poubelle) {
        await prisma.poubelleConnectee.delete({ where: { id } });

        res.json({ success: true, message: "Poubelle suppriméE avec succès" });
       
        } else {
          res.status(404).json({ message: 'Poubelle non trouvée' });
        }
      // Supprimer l'utilisateur
     
  } catch (error) {
      res.status(500).json({ message: "Erreur du serveur", error });
      next(error);
  }
};



export const findByPoubelleId = async (req: Request, res: Response, next: NextFunction) => {
  try {
      const id = Number(req.params.id);
      const poubelleConnectee = await prisma.poubelleConnectee.findUnique({ where: { id } });
        if (poubelleConnectee) {
          res.json({ success: true, message: "Liste des poubelles", data: poubelleConnectee });
        } else {
          res.status(404).json({ message: 'Poubelles non trouvé' });
        }
  } catch (error) {
      res.status(500).json({ message: "Erreur du serveur", error });
      next(error);
  }
};

