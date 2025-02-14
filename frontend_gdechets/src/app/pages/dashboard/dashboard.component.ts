import { Component, OnInit } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { HeaderComponent } from "../../components/header/header.component";
import { NgChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { ChartOptions, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MenuComponent, HeaderComponent, NgChartsModule,],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
   
  constructor() { }

  ngOnInit(): void {

  }
 
// Configuration du Bar Chart
public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartLabels: string[] = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'];
  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [
      {
        label: 'Déchets collectés (kg)',
        data: [500, 700, 1200, 1100, 900, 1500, 1700, 2000, 2100, 1900, 1600, 1400],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      }
    ]
  };

  public barChartType: ChartType = 'bar';
 
  public pieChartLabels: string[] = ['Plastique', 'Papier', 'Verre', 'Métal', 'Organique'];
public pieChartData: ChartData<'pie'> = {
  labels: this.pieChartLabels,
  datasets: [
    {
      data: [30, 20, 15, 10, 25],
      backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0', '#9966ff'],
    }
  ]
};

public pieChartType: ChartType = 'pie';

public lineChartData: ChartData<'line'> = {
    labels: this.barChartLabels,
    datasets: [
      {
        label: 'Recyclage (%)',
        data: [20, 25, 30, 35, 40, 50, 55, 60, 65, 70, 75, 80],
        borderColor: '#ff6384',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      }
    ]
  };
  
  public lineChartType: ChartType = 'line';

}
