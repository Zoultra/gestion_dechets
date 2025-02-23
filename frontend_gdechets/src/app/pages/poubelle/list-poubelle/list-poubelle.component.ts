import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../../../pipes/filter.pipe';
import { AlertService } from '../../../components/services/alert/alert.service';
import { PoubelleService } from '../../../components/services/poubelle/poubelle.service';


@Component({
  selector: 'app-list-poubelle',
  standalone: true,
  imports:  [NgxPaginationModule,FormsModule,CommonModule,FilterPipe],
  templateUrl: './list-poubelle.component.html',
  styleUrl: './list-poubelle.component.scss'
})
export class ListPoubelleComponent implements  OnInit {
      poubelles: any[] = [];
      
     
      //listusers: Array<any> = [];
      id!: number
      //dtOptions: DataTables.Settings = {};
      myFilterText!:any
    
      title = 'Pagination'
      page: number = 1
      count: number = 0;
      tableSize: number = 6;
      tableSizes: any = [6, 10, 15, 20]

      modeAffichage: string = 'table'; // Valeurs possibles : 'table' ou 'icon'

      constructor(private poubelleService: PoubelleService,private alertService: AlertService,private route: ActivatedRoute, private router: Router) { }
       
    
      ngOnInit(): void {
        this.loadModeAffichage(); // Charger le mode depuis localStorage
        this.getPoubelleList();
      }
    
      private getPoubelleList(){
        this.poubelleService.getPoubelleList().subscribe({
          next: (response: any) => {
            console.log('Données reçues :', response); // 🔍 Vérifier la structure dans la console
            if (response.success) {
              this.poubelles = response.data; // ✅ Extraire `data`
            }
          },
          error: (err) => {
            console.error('Erreur lors du chargement des utilisateurs', err);
          }
        });
    
      }
    
      
    
      deletePoubelle(id: number) {
        this.alertService.confirmDelete(() => {
          this.poubelleService.deletePoubelle(id).subscribe(() => {
            this.alertService.success("Poubelle supprimé avec succès !");
            this.getPoubelleList(); // Rafraîchir la liste
          }, error => {
            this.alertService.error("La suppression a échoué.");
          });
        });
      }
      
    
      onTableDataChange(event: any){
        this.page = event;
        this.getPoubelleList()
      }
    
      onTableSizeChange(event: any){
        this.tableSize = event.target.value;
        this.page = 1;
        this.getPoubelleList()
      }
    
      
      updatePoubelle(id: number){
        this.router.navigate(['dashboard/poubelles/update', id]);
      }
    
    /* reload*/
    reloadPage(){
      this.router.routeReuseStrategy.shouldReuseRoute= () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['./'], {
        relativeTo: this.route
      })
    }
    
    goToAddPoubelle() {
      this.router.navigate(['/dashboard/poubelles/add']); // ✅ Naviguer vers la liste des clients
    }

     

    // ⬇️ Charger le mode d'affichage depuis localStorage
  loadModeAffichage(): void {
    const modeSauvegarde = localStorage.getItem('modeAffichage');
    if (modeSauvegarde) {
      this.modeAffichage = modeSauvegarde;
    }
  }

  toggleAffichage(): void {
    this.modeAffichage = this.modeAffichage === 'table' ? 'icon' : 'table';
    localStorage.setItem('modeAffichage', this.modeAffichage);
  }
             
}
