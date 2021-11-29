import { RegionService } from 'src/app/services/region.service';
import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/model/region';
import { Voyage } from 'src/app/model/voyage';
import { VoyageService } from 'src/app/services/voyage.service';

@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.css']
})
export class AddRegionComponent implements OnInit {

  newRegion=new Region();
  V : Voyage [];
  newVoyage=new Voyage();
  id:number=0;
  msg : string;
  constructor(private regionService:RegionService,private voyageService:VoyageService) { }
addRegion(){
  // console.log(this.newRegion);
  this.regionService.ajouterRegion(this.newRegion);
  this.msg = "Region"+ this.newRegion.nom +" ajouté avec succès"
}
addVoyage(){
  this.newVoyage.id=this.V[this.V.length-1].id+1;
  this.newRegion.id=this.newVoyage.id;
  this.newRegion.nom=this.newVoyage.libelle;
  this.newRegion.prix=this.newVoyage.prix;
  this.newRegion.img=this.newVoyage.Image;
  this.addRegion();
  this.voyageService.ajouterVoyage(this.newVoyage);
  this.msg = "Voyage"+ this.newVoyage.libelle +" ajouté avec succès";
  this.id++;
  

}
  ngOnInit(): void {
    this.V=this.voyageService.getVoyage();
    
  }

}

