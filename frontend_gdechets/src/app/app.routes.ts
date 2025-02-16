import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateClientComponent } from './pages/client/create-client/create-client.component';
import { StatistiqueComponent } from './pages/statistique/statistique.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent ,

    children:[  
              { path: 'utilisateurs', component:  CreateClientComponent},
              { path: 'statistique', component:  StatistiqueComponent}
            ]
     
  },
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
