import { Component, OnInit } from '@angular/core';
import { Voyage } from 'src/app/model/voyage';
import { VoyageService } from 'src/app/services/voyage.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  v:number=0;
  Voyages:Voyage[];
  image:string="assets/japanflag.jpg";
  nom:string="Sélectionnez une Région";
  description:string="Veuillez sélectionner une région sur la map ci-contre.";
afficherRegion(i:number){

  this.image=this.Voyages[i].Image;
  this.nom=this.Voyages[i].libelle;
  this.description=this.Voyages[i].Description;
  this.v=this.Voyages[i].id;
}

  constructor(private voyageService:VoyageService) { }
  ngOnInit(): void {
    this.voyageService.getVoyage().subscribe(dataV=>this.Voyages = dataV);

  }

}
