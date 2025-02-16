import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { HeaderComponent } from "../../components/header/header.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MenuComponent, HeaderComponent,RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
   
  constructor() { }

  ngOnInit(): void {

  }
 
  

}
