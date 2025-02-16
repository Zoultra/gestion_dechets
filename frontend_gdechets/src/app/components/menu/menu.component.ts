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
        url:'dashboard/utilisateurs'
      },
      {
        id:'22',
        titre:'Chauffeurs',
        icon:'fa fa-user',
        url:'dashboard/client'
      } ,
     
      {
        id:'23',
        titre:'Administrateurs',
        icon:'fa fa-user',
        url:'dashboard/client'
      } 
    ]
  },
  {
    id:'3',
    titre:'Poubelle',
    icon:'fas fa-cubes',
    url:'',
    sousMenu: [
      {
        id:'31',
        titre:'Gestion des Poubelles',
        icon:'fas fa-edit',
        url:'dashboard/poubelle'
      } 
    ]
  },
  {
    id:'4',
    titre:'Etudiants',
    icon:'fa fa-users',
    url:'',
    sousMenu: [
      {
        id:'41',
        titre:'Gestion des etudiants',
        icon:'fas fa-edit',
        url:'dashboard/list-etudiant'
      } 
    ]
  },
  {
    id:'4bis',
    titre:'Paiements',
    icon:'fa fa-users',
    url:'',
    sousMenu: [
      {
        id:'4bis1',
        titre:'Gestion des Paiements',
        icon:'fas fa-edit',
        url:'dashboard/ajouter-paiement'
      }/*,
      {
        id:'4bis2',
        titre:'Situation des Paiements',
        icon:'fa fa-info-circle',
        url:'situation-paiement'
      }*/
    ]
  },
  {
    id:'5',
    titre:'Departement',
    icon:'fas fa-plus',
    url:'',
    sousMenu: [
      {
        id:'51',
        titre:'Gestion des departements',
        icon:'fas fa-edit',
        url:'dashboard/list-departement'
      }/*,
      {
        id:'52',
        titre:'UE / departements',
        icon:'fa fa-info-circle',
        url:''
      }*/
    ]
  },
  {
    id:'6',
    titre:'UE',
    icon:'fas fa-plus',
    url:'',
    sousMenu: [
      {
        id:'61',
        titre:'Gestion des UEs',
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
  {
    id:'7',
    titre:'Matières',
    icon:'fa fa-book',
    url:'',
    sousMenu: [
      {
        id:'71',
        titre:'Gestion des matières',
        icon:'fa fa-edit',
        url:'dashboard/list-matiere'
      }/*,
      {
        id:'72',
        titre:'Matières / Examens',
        icon:'fa fa-info-circle',
        url:''
      }*/
    ]
  },
  {
    id:'8',
    titre:'Notes',
    icon:'fas fa-plus',
    url:'',
    sousMenu: [
      {
        id:'81',
        titre:'Saisir note',
        icon:'fa fa-edit',
        url:'dashboard/note'
      },
      {
        id:'82',
        titre:'Notes / Classes',
        icon:'fa fa-info-circle',
        url:'dashboard/note'
      }
    ]
  },
  {
    id:'9',
    titre:'Professeurs',
    icon:'fas fa-user-secret',
    url:'',
    sousMenu: [
      {
        id:'91',
        titre:'Gestion des professeurs',
        icon:'fa fa-edit',
        url:'dashboard/professeur-list'
      },
      {
        id:'92',
        titre:'Professeurs / Matières',
        icon:'fa fa-info-circle',
        url:'dashboard/prof-matiere'
      }
    ]
  },
  {
    id:'99',
    titre:'Personnels',
    icon:'fas fa-user-secret',
    url:'',
    sousMenu: [
      {
        id:'991',
        titre:'Gestion des personnels',
        icon:'fa fa-edit',
        url:'dashboard/list-personnel'
      },
      {
        id:'992',
        titre:'Personnel / Salaire',
        icon:'fa fa-info-circle',
        url:'dashboard/personnel-salaire'
      }
    ]
  },
  {
    id:'10',
    titre:'Dépenses',
    icon:'fa fa-tasks',
    url:'',
    sousMenu: [
      {
        id:'101',
        titre:'Gestion des dépenses',
        icon:'fa fa-user',
        url:'dashboard/gestion-depense/list-depense'
      } 
       
    ]
  },
  {
    id:'11',
    titre:'Utilisateurs',
    icon:'fa fa-tasks',
    url:'',
    sousMenu: [
      {
        id:'111',
        titre:'Gestion des comptes',
        icon:'fa fa-user',
        url:'dashboard/gestion-user/list-user'
      },
      {
        id:'112',
        titre:'Mon compte',
        icon:'fa fa-user',
        url:'dashboard/gestion-compte'
      }
       
    ]
  },
  {
    id:'113',
    titre:'Années',
    icon:'fa fa-tasks',
    url:'',
    sousMenu: [
      {
        id:'1113',
        titre:'Gestion des années scolaires',
        icon:'fa fa-user',
        url:'dashboard/gestion-annee/list-annee'
      },
      {
        id:'1114',
        titre:'Mon compte',
        icon:'fa fa-user',
        url:'dashboard/gestion-annee'
      }
       
    ]
  }
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
