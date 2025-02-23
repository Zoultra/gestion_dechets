
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PoubelleService } from '../../../components/services/poubelle/poubelle.service';
import { AlertService } from '../../../components/services/alert/alert.service';
import { Poubelle } from '../../../components/models/poubelle';
import { UserService } from '../../../components/services/users/user.service';
import { User } from '../../../components/models/user';

@Component({
  selector: 'app-update-poubelle',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './update-poubelle.component.html',
  styleUrl: './update-poubelle.component.scss'
})
export class UpdatePoubelleComponent implements OnInit {

  poubelleForm!: FormGroup;
  poubelle: Poubelle = new Poubelle();
  clients: Array<User> = [];
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private poubelleService: PoubelleService,
    private alertService: AlertService,
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.poubelleForm = this.fb.group({
      niveauRemplissage: [0, Validators.required],
      etat: ['Actif', Validators.required],
      capteurID: ['', Validators.required],
      adresse: ['', Validators.required],
      localisation: ['', Validators.required],
      userId: ['', Validators.required]
      
    });
    this.id = this.route.snapshot.params['id']
    this.poubelleService.getPoubelleById(this.id).subscribe({
    next: (response: any) => {
      console.log('Données reçues :', response); // 🔍 Vérifier la structure dans la console
      if (response.success) {
        this.poubelle = response.data; // ✅ Extraire `data`
      }
    },
    error: (err) => {
      console.error('Erreur lors du chargement des utilisateurs', err);
    }
  });

  this.getUserList()
    
  }

   

  // 🔹 Mise à jour de la poubelle
  updatePoubelle() {
    if (this.poubelleForm.valid) {
      const formData = {
        ...this.poubelleForm.value,
        userId: Number(this.poubelleForm.value.userId) // Convertir userId en nombre
      };

      this.poubelleService.updatePoubelle(this.id, formData).subscribe({
        next: () => {
          this.alertService.showLoading('Mise à jour en cours...', 5000);
          setTimeout(() => {
            this.alertService.closeLoading();
            this.alertService.confirmSuccess('Mise à jour effectuée', 2000);
            this.goToPoubelleList();
          }, 3000);
        },
        error: () => {
          this.alertService.confirmError('Mise à jour échouée', 2000);
        }
      });
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

  goToPoubelleList() {
    this.router.navigate(['/dashboard/poubelles/liste']);
  }
}
