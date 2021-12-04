import { Component, OnInit } from '@angular/core';
import { Voyage } from 'src/app/model/voyage';
import { VoyageService } from 'src/app/services/voyage.service';

@Component({
  selector: 'app-liste-regions',
  templateUrl: './liste-regions.component.html',
  styleUrls: ['./liste-regions.component.css']
})
export class ListeRegionsComponent implements OnInit {
  Voyages: Voyage[]=[];
  V:Voyage[]=[];
  constructor(private voyageService:VoyageService) { }
  Actif:String="Tout";
  test:boolean=true;
filtrer(d:String){
  if (d=="Tout"){
    this.voyageService.getVoyage().subscribe(dataV=>this.Voyages = dataV);
  } else {
   
    this.voyageService.getVoyage().subscribe(
      
        ()=> this.Voyages = this.V.filter(i=>(i.categorie==d))
      )
    
    // this.voyageService.getVoyage().subscribe(dataV=>this.Voyages = dataV);
    // this.Voyages=this.Voyages.filter(i=>(i.categorie==d));
  }
  // }  this.Voyages=this.voyageService.getVoyageByCategorie(d);   


  this.Actif=d;
}
  ngOnInit(): void {
    // this.produitService.getProduits()
    // .subscribe (data => this.lesProduits = data)
   this.voyageService.getVoyage().subscribe(dataV=>this.Voyages = dataV);
   this.voyageService.getVoyage().subscribe(dataV=>this.V = dataV);

    
  }

}
