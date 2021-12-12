import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Voyage } from 'src/app/model/voyage';
import { VoyageService } from 'src/app/services/voyage.service';
// import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  


  voyages : Voyage[]=[];
  Touristique:number=0;
  Historique:number=0;
  Paradisiaque:number=0;
  Traditionnelle:number=0;
  chartDatasets: Array<any> = [
    { data:  [this.Touristique, this.Historique, this.Traditionnelle, this.Paradisiaque], label: 'My First dataset' }
  ];
  constructor(private voyageService:VoyageService){

  }
  
  ngOnInit(): void {
  
    this.voyageService.getVoyage().subscribe(data=>{this.voyages=data;
    data.forEach(d => {
      switch(d.categorie) { 
        case "Touristique" : { 
           this.Touristique=this.Touristique+d.nbVisites;
           break; 
        } 
        case "Historique": { 
        this.Historique=this.Historique+d.nbVisites;
           break; 
        } 
        case "Paradisiaque": {
          this.Paradisiaque=this.Paradisiaque+d.nbVisites;
          break;
        }
      case "Traditionnelle": {
        this.Traditionnelle=this.Traditionnelle+d.nbVisites;
        break;
      }
        default: { 
          alert("ERREUR");
           break; 
        } 
     } 
    },
    );
    this.chartDatasets[0].data[0]=this.Touristique;
    this.chartDatasets[0].data[1]=this.Historique;
    this.chartDatasets[0].data[2]=this.Traditionnelle;
    this.chartDatasets[0].data[3]=this.Paradisiaque   ;
    


    }
    );

  }
//   let t=0;
//   this.voyageService.getVoyage().subscribe(data=>{
//     data.forEach(d => {
//       switch(d.categorie) { 
//         case "Touristique" : { 
//            this.Touristique++;
//            break; 
//         } 
//         case "Historique": { 
//         this.Historique++;
//            break; 
//         } 
//         case "Paradisiaque": {
//           this.Paradisiaque++;
//           break;
//         }
//       case "Traditionnelle": {
//         this.Traditionnelle++;
//         break;
//       }
//         default: { 
//           alert("ERREUR");
//            break; 
//         } 
//      } 
//     });
//     this.chartDatasets[0].push(t);
//   })
//   return t;


// }
Verif(){
if(this.chartDatasets[0].data[0]!=0){
  return true;
}
  else return false;
}



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




}

