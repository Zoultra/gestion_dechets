import { Component, OnInit } from '@angular/core';
import { User } from '../../../components/models/user';
import { UserService } from '../../../components/services/users/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../../../pipes/filter.pipe';
import { AlertService } from '../../../components/services/alert/alert.service';
 

@Component({
  selector: 'app-list-client',
  standalone: true,
  imports: [NgxPaginationModule,FormsModule,CommonModule,FilterPipe],
  templateUrl: './list-client.component.html',
  styleUrl: './list-client.component.scss'
})
 

export class ListClientComponent implements  OnInit {
  users: any[] = [];
  //listusers: Array<any> = [];
    id!: number
  //dtOptions: DataTables.Settings = {};
  myFilterText!:any

  title = 'Pagination'
  page: number = 1
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20]
 
  constructor(private userService: UserService,private alertService: AlertService,private route: ActivatedRoute, private router: Router) { }
   

  ngOnInit(): void {
    this.getUserList();
  }

  private getUserList(){
    this.userService.getUserList().subscribe({
      next: (response: any) => {
        console.log('Données reçues :', response); // 🔍 Vérifier la structure dans la console
        if (response.success) {
          this.users = response.data; // ✅ Extraire `data`
        }
      },
      error: (err) => {
        console.error('Erreur lors du chargement des utilisateurs', err);
      }
    });

  }

  

  deleteClient(id: number) {
    this.alertService.confirmDelete(() => {
      this.userService.deleteUser(id).subscribe(() => {
        this.alertService.success("Utilisateur supprimé avec succès !");
        this.getUserList(); // Rafraîchir la liste
      }, error => {
        this.alertService.error("La suppression a échoué.");
      });
    });
  }
  

  onTableDataChange(event: any){
    this.page = event;
    this.getUserList()
  }

  onTableSizeChange(event: any){
    this.tableSize = event.target.value;
    this.page = 1;
    this.getUserList()
  }

  
  updateClient(id: number){
    this.router.navigate(['dashboard/utilisateurs/update', id]);
  }

   


/* reload*/
reloadPage(){
  this.router.routeReuseStrategy.shouldReuseRoute= () => false;
  this.router.onSameUrlNavigation = 'reload';
  this.router.navigate(['./'], {
    relativeTo: this.route
  })
}

goToAddClient() {
  this.router.navigate(['/dashboard/utilisateurs/add']); // ✅ Naviguer vers la liste des clients
}
 
 
} 
