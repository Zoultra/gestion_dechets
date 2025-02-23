import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PoubelleService } from '../../../components/services/poubelle/poubelle.service';
import { AlertService } from '../../../components/services/alert/alert.service';
import { Poubelle } from '../../../components/models/poubelle';
import { UserService } from '../../../components/services/users/user.service';
import { User } from '../../../components/models/user';


@Component({
  selector: 'app-create-poubelle',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './create-poubelle.component.html',
  styleUrl: './create-poubelle.component.scss'
})
export class CreatePoubelleComponent {

constructor(private router: Router, private poubelleService: PoubelleService, private alertService: AlertService, private userService: UserService,   private fb: FormBuilder,) { }
poubelleForm!: FormGroup;
 poubelle : Poubelle = new Poubelle()
  
 clients: Array<User> = [];
  
 ngOnInit(): void {
  this.poubelleForm = this.fb.group({
    niveauRemplissage: [0, Validators.required],
    etat: ['Actif', Validators.required],
    capteurID: ['', Validators.required],
    adresse: ['', Validators.required],
    localisation: ['', Validators.required],
    userId: ['', Validators.required] // Sélection de l'utilisateur
  });
   
    this.getUserList()
}

 
  onSubmit(){
    this.savePoubelle()
  }
  

  savePoubelle() { 
  
  
    if (this.poubelleForm.valid) {
  
      const formData = {
        ...this.poubelleForm.value,
        userId: Number(this.poubelleForm.value.userId) // Convertir userId en int
      };
      console.log(this.poubelleForm.value);
      this.poubelleService.createPoubelle(formData).subscribe(
        data => {
          this.alertService.showLoading('Enregistrement en cours...', 5000);
          setTimeout(() => {
            this.alertService.closeLoading();
            this.alertService.confirmSuccess('Enregistrement effectué', 2000);
            this.goToPoubelleList();
          }, 3000);
          console.log(data);
        },
        error => {
          this.alertService.confirmError('Enregistrement échoué', 2000);
        }
      );
    }
  }
  

  private getUserList(){
    this.userService.getUserList().subscribe({
      next: (response: any) => {
        console.log('Données reçues :', response); // 🔍 Vérifier la structure dans la console
        if (response.success) {
          this.clients = response.data; // ✅ Extraire `data`
        }
      },
      error: (err) => {
        console.error('Erreur lors du chargement des utilisateurs', err);
      }
    });

  }

   goToPoubelleList(){
     this.router.navigate(['/dashboard/poubelles/liste']); 
   }
   
}
