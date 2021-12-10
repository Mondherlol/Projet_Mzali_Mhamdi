import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  
  ngOnInit(): void {
    this.teststorage();
  }
  public chartType: string = 'doughnut';

  public chartDatasets: Array<any> = [
    { data: [300, 50, 100, 160], label: 'My First dataset' }
  ];

  public chartLabels: Array<any> = ['Touristique', 'Historique', 'Traditionnelle', 'Paradisiaque'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }



 teststorage() {
    if (typeof localStorage != 'undefined') {
        // Récupération de la valeur dans web storage
        var nbvisites = localStorage.getItem('visites');
        // Vérification de la présence du compteur
        if (nbvisites != null) {
            // convertir chaine==>entier
           var N=Number(nbvisites);
        } else {
            var N=1;

        }

        N++;
        nbvisites=String(N);
        // Stockage à nouveau en attendant la prochaine visite
        localStorage.setItem('visites', nbvisites);
        // Affichage dans la page
        document.getElementById('test').innerHTML = "Le Nombre de visite est : "+nbvisites;
    } else {
        alert("localStorage n'est pas supporté");
    }
}
}

