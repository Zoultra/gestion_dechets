import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateClientComponent } from './pages/client/create-client/create-client.component';
import { StatistiqueComponent } from './pages/statistique/statistique.component';
import { ListClientComponent } from './pages/client/list-client/list-client.component';
import { UpdateClientComponent } from './pages/client/update-client/update-client.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent ,

    children:[ 
               { path: 'statistique', component:  StatistiqueComponent},
               { path: 'utilisateurs/add', component:  CreateClientComponent},
               { path: 'utilisateurs/liste', component:  ListClientComponent},
               { path: 'utilisateurs/update/:id', component:  UpdateClientComponent}
              
            ]
     
  },
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
