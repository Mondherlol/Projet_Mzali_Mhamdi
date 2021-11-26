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
  constructor(private voyageService:VoyageService) { }
  Actif:String="Tout";
  test:boolean=true;
filtrer(d:String){
  if (d=="Tout"){
    this.Voyages=this.voyageService.getVoyage();
  } else  this.Voyages=this.voyageService.getVoyageByCategorie(d);   

  this.Actif=d;
}
  ngOnInit(): void {
    this.Voyages=this.voyageService.getVoyage();
  }

}
