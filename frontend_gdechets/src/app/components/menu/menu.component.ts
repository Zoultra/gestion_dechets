import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './menu';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  menuOpen = false;
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  public menuProperties: Array<Menu> = [ 
    {
    id:'1',
    titre:'Tableau de bord',
    icon:'fa fa-line-chart',   
    url:'',
    sousMenu: [
      {
        id:'11',
        titre:'Vue d\'ensemble',
        icon:'fa fa-chart-pie',
        url:'dashboard/statistique'
      }
    ]
  },

  {
    id:'2',
    titre:'Utilisateurs',
    icon:'fa fa-users',
    url:'',
    sousMenu: [
      {
        id:'21',
        titre:'Clients',
        icon:'fa fa-user',
        url:'dashboard/utilisateurs/liste'
      },
      {
        id:'22',
        titre:'Chauffeurs',
        icon:'fa fa-user',
        url:'dashboard/chauffeur/liste'
      } ,
     
      {
        id:'23',
        titre:'Admins',
        icon:'fa fa-user',
        url:'dashboard/admin/liste'
      } 
    ]
  },
  {
    id:'3',
    titre:'Poubelles',
    icon:'fa fa-trash',
    url:'',
    sousMenu: [
      {
        id:'31',
        titre:'Gestion',
        icon:'fa fa-pencil-square-o',
        url:'dashboard/poubelles/liste'
      } ,
      {
        id:'32',
        titre:'Carte Interactive',
        icon:'fa fa-globe',
        url:'dashboard/poubelles/carte'
      } 
    ]
  },
  {
    id:'4',
    titre:'Collectes',
    icon:'fa fa-users',
    url:'',
    sousMenu: [
      {
        id:'41',
        titre:'Itinéraire',
        icon:'fas fa-edit',
        url:'dashboard/list-etudiant'
      } ,
      {
        id:'41',
        titre:'Historique',
        icon:'fas fa-edit',
        url:'dashboard/list-etudiant'
      } 
    ]
  },
  {
    id:'4bis',
    titre:'Services',
    icon:'fa fa-users',
    url:'',
    sousMenu: [
      {
        id:'4bis1',
        titre:'Gestion',
        icon:'fas fa-edit',
        url:'dashboard/ajouter-paiement'
      },
      {
        id:'4bis2',
        titre:'Commandes',
        icon:'fa fa-info-circle',
        url:'situation-paiement'
      }
    ]
  },
  {
    id:'5',
    titre:'Signalement',
    icon:'fas fa-plus',
    url:'',
    sousMenu: [
      {
        id:'51',
        titre:'Signalement Citoyens',
        icon:'fas fa-edit',
        url:'dashboard/list-departement'
      },
      {
        id:'52',
        titre:'Réclammations',
        icon:'fa fa-info-circle',
        url:''
      }
    ]
  },
  {
    id:'6',
    titre:'Conseils',
    icon:'fas fa-plus',
    url:'',
    sousMenu: [
      {
        id:'61',
        titre:'Gestion',
        icon:'fas fa-edit',
        url:'dashboard/list-ue'
      }/*,
      {
        id:'62',
        titre:'UE / Matieres',
        icon:'fa fa-info-circle',
        url:''
      }*/
    ]
  }, 
  
   
  
   
];

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  navigate(url?: string): void {
    this.router.navigate([url])
     
  }

}
