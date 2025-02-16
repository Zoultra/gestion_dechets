import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../components/services/users/user.service';
import { Router } from '@angular/router';
import { User } from '../../../components/models/user';
import { NgToastService } from 'ng-angular-popup';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.scss'
})


export class CreateClientComponent implements OnInit {

  constructor(private router: Router, private toast: NgToastService, private userService: UserService) { }
    
  
  user : User = new User()

  ngOnInit(): void {
  }
    
  onSubmit(){
    this.saveUser()
  }

  
    showAlert() {
      Swal.fire({
        title: 'Alerte !',
        text: 'Ceci est une alerte avec SweetAlert2.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    }
    
  saveUser(){
    
    this.userService.createUser(this.user).subscribe( data =>{
      console.log(data)
      this.showAlert()
    },
    error => {
      this.showAlert()
       })
  }

}

