import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateClientComponent } from './pages/client/create-client/create-client.component';
import { StatistiqueComponent } from './pages/statistique/statistique.component';
import { ListClientComponent } from './pages/client/list-client/list-client.component';
import { UpdateClientComponent } from './pages/client/update-client/update-client.component';
import { CreateChauffeurComponent } from './pages/chauffeur/create-chauffeur/create-chauffeur.component';
import { ListChauffeurComponent } from './pages/chauffeur/list-chauffeur/list-chauffeur.component';
import { UpdateChauffeurComponent } from './pages/chauffeur/update-chauffeur/update-chauffeur.component';
import { ListAdminComponent } from './pages/admin/list-admin/list-admin.component';
import { ListPoubelleComponent } from './pages/poubelle/list-poubelle/list-poubelle.component';  
import { CreatePoubelleComponent } from './pages/poubelle/create-poubelle/create-poubelle.component';
import { UpdatePoubelleComponent } from './pages/poubelle/update-poubelle/update-poubelle.component';
import { CartePoubelleComponent } from './pages/poubelle/carte-poubelle/carte-poubelle.component';
 

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent ,

    children:[ 
               { path: 'statistique', component:  StatistiqueComponent},
               { path: 'utilisateurs/add', component:  CreateClientComponent},
               { path: 'utilisateurs/liste', component:  ListClientComponent},
               { path: 'utilisateurs/update/:id', component:  UpdateClientComponent},

               { path: 'chauffeur/add', component:  CreateChauffeurComponent},
               { path: 'chauffeur/liste', component:  ListChauffeurComponent},
               { path: 'chauffeur/update/:id', component:  UpdateChauffeurComponent},

               { path: 'admin/liste', component:  ListAdminComponent},

               { path: 'poubelles/liste', component:  ListPoubelleComponent},
               { path: 'poubelles/add', component: CreatePoubelleComponent },
               { path: 'poubelles/update/:id', component: UpdatePoubelleComponent },
               { path: 'poubelles/carte', component: CartePoubelleComponent },
              
            ]
     
  },
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
