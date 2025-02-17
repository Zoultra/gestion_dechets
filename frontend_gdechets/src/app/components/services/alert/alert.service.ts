
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root', // Disponible dans toute l'application
})
export class AlertService {
  constructor() {}

  // Afficher une alerte de chargement
  showLoading(message: string, duration?: number) {
    Swal.fire({
      title: message,
      didOpen: () => {
        Swal.showLoading(); // Affiche l'indicateur de chargement
      },
      timer: duration, // Ferme automatiquement après la durée spécifiée
      timerProgressBar: true, // Affiche une barre de progression du timer
      allowOutsideClick: false, // Empêche la fermeture en cliquant à l'extérieur
      allowEscapeKey: false, // Empêche la fermeture avec la touche Échap
    });

    
  }

  // Fermer l'alerte de chargement
  closeLoading() {
    Swal.close();
  }

  // Afficher une alerte de succès
  confirmSuccess(message: string, timer: number) {
    Swal.fire({
      icon: 'success',
      title: message,
      text: 'Vos données ont été enregistrées avec succès.',
      showConfirmButton: false,
      timer: timer,
    });
  }

  // Dans alert.service.ts

// Afficher une alerte d'erreur
confirmError(message: string, timer: number) {
  Swal.fire({
    icon: 'error',
    title: 'Erreur',
    text: message,
    showConfirmButton: false,
    timer: timer,
  });
}

// Afficher une alerte d'avertissement
confirmWarning(message: string = 'Attention !', timer: number = 2000) {
  Swal.fire({
    icon: 'warning',
    title: message,
    showConfirmButton: false,
    timer: timer,
  });
}


}