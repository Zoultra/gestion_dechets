import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../components/services/users/user.service';
import { Router } from '@angular/router';
import { User } from '../../../components/models/user';
import { NgToastService } from 'ng-angular-popup';
import { FormsModule } from '@angular/forms';
import { AlertService } from '../../../components/services/alert/alert.service';

@Component({
  selector: 'app-create-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.scss'
})


export class CreateClientComponent implements OnInit {

  constructor(private router: Router, private toast: NgToastService, private userService: UserService, private alertService: AlertService) { }
    
  
  user : User = new User()

  ngOnInit(): void {
  }
    
  onSubmit(){
             this.saveUser()
           }

    
       saveUser(){
             this.userService.createUser(this.user).subscribe( data =>{
              this.alertService.showLoading('Enregistrement en cours...', 5000);
              setTimeout(() => {
                // Ferme l'alerte de chargement
               
                this.alertService.closeLoading();
                // Affiche une alerte de succès avec un symbole de vérification
                // Afficher l'alerte de succès
                this.alertService.confirmSuccess('Enregistrement effectué', 2000);
                this.goToClientList()
              }, 3000);
              console.log(data)
                                                                      },
                  error => {
                             this.alertService.confirmError('Enregistrement echoué', 2000)
                           })
            }

            goToClientList(){
              this.router.navigate(['/dashboard/utilisateurs/liste']); 
            }

}

  
 

