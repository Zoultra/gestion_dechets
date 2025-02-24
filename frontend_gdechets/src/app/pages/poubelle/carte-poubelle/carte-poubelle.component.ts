import { Component, OnInit } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { PoubelleService } from '../../../components/services/poubelle/poubelle.service'; 
import { CommonModule } from '@angular/common';

import * as L from 'leaflet';
const DefaultIcon = L.icon({
  iconUrl: '/assets/leaflet/poubelle.png', // Assure-toi que ce fichier existe
  //shadowUrl: '/assets/leaflet/marker1.jpeg',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;


@Component({
  selector: 'app-carte-poubelle',
  standalone: true,
  imports: [LeafletModule, CommonModule],
  templateUrl: './carte-poubelle.component.html',
  styleUrl: './carte-poubelle.component.scss'
})



export class CartePoubelleComponent implements OnInit {
  poubelles: any[] = [];
  map!: L.Map;
  markers: L.Marker[] = [];

  constructor(private poubelleService: PoubelleService) {}

  ngOnInit(): void {
    this.loadPoubelles();
    
  }

  loadPoubelles(): void {
    this.poubelleService.getPoubelleList().subscribe((response: any) => {
      console.log("Réponse API des poubelles :", response);
  
      if (response.success && Array.isArray(response.data)) {
        this.poubelles = response.data;
        console.log("Poubelles chargées :", this.poubelles);
  
        // Vérifier si la carte existe déjà
        if (!this.map) {
          this.initMap();
        }
  
        this.updateMapMarkers();
      } else {
        console.error("Erreur : les données ne sont pas un tableau", response);
        this.poubelles = [];
      }
    });
  }
  


 


  initMap(): void {
    if (!this.map) {
      this.map = L.map('map').setView([12.639, -8.002], 14); // Centre de la carte

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(this.map);

  //   L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  //     attribution: '&copy; OpenStreetMap Mali'
  //   }).addTo(this.map);
   // L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
   //   attribution: '&copy; CartoDB'
   // }).addTo(this.map);

   //L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    //attribution: '&copy; OpenStreetMap France'
 // }).addTo(this.map);

     }

   
    
     setTimeout(() => {
      this.map.invalidateSize(); 
    }, 1000);

    this.updateMapMarkers();
  }

  updateMapMarkers(): void {
    if (!Array.isArray(this.poubelles)) {
      console.error("Erreur : this.poubelles n'est pas un tableau !");
      return;
    }
  
    this.poubelles.forEach((poubelle) => {
      if (!poubelle.localisation) {
        console.error("Aucune localisation trouvée pour la poubelle :", poubelle);
        return;
      }
  
      const coords = poubelle.localisation.split(',');
      if (coords.length !== 2) {
        console.error("Format de localisation invalide :", poubelle.localisation);
        return;
      }
  
      const lat = parseFloat(coords[0].trim());
      const lon = parseFloat(coords[1].trim());
  
      if (isNaN(lat) || isNaN(lon)) {
        console.error("Coordonnées invalides :", lat, lon);
        return;
      }
  
      console.log("Ajout d'un marqueur :", { lat, lon });
  
      L.marker([lat, lon])
        .addTo(this.map)
        .bindPopup(`<b>Poubelle ID:</b> ${poubelle.id}<br><b>Niveau:</b> ${poubelle.niveauRemplissage}%`);
    });
  }
  

  zoomToPoubelles(): void {
    if (this.map && this.poubelles.length > 0) {
      const bounds = L.latLngBounds(this.poubelles.map(p => [p.lat, p.lng]));
      this.map.fitBounds(bounds, { padding: [50, 50] });
    }
  }

  
}