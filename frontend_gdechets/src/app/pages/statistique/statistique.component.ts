import { Component } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartOptions, ChartData, ChartType } from 'chart.js';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-statistique',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './statistique.component.html',
  styleUrl: './statistique.component.scss'
})
export class StatistiqueComponent {

  
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
  
  
  
    showAlert() {
      Swal.fire({
        title: 'Alerte !',
        text: 'Ceci est une alerte avec SweetAlert2.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    }
  
    showLoading(message: string = 'Chargement en cours...') {
      Swal.fire({
        title: message,
        didOpen: () => {
          Swal.showLoading(); // Affiche l'indicateur de chargement
        },
        allowOutsideClick: false, // Empêche la fermeture en cliquant à l'extérieur
        allowEscapeKey: false, // Empêche la fermeture avec la touche Échap
      });
    }
  
    // Fermer l'indicateur de chargement
    closeLoading() {
      Swal.close();
    }
  
  

}
