import { RegionService } from 'src/app/services/region.service';
import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/model/region';
import { Voyage } from 'src/app/model/voyage';
import { VoyageService } from 'src/app/services/voyage.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.css']
})
export class AddRegionComponent implements OnInit {
  AjouterForm:FormGroup;
  newRegion=new Region();
  V : Voyage [];
  R : Region [];
  newVoyage=new Voyage();
  id:number=0;
  msg : string;
  constructor(private regionService:RegionService,private voyageService:VoyageService,private fb:FormBuilder) { }
// addRegion(){
//   // console.log(this.newRegion);
//   this.regionService.ajouterRegion(this.newRegion);
//   this.msg = "Region"+ this.newRegion.nom +" ajouté avec succès"
// }
// addVoyage(form:NgForm){
//   this.newVoyage.id=this.V[this.V.length-1].id+1;
//   this.newRegion.id=this.newVoyage.id;
//   this.newRegion.nom=this.newVoyage.libelle;
//   this.newRegion.prix=this.newVoyage.prix;
//   this.newRegion.img=this.newVoyage.Image;
//   this.addRegion();
//   this.voyageService.ajouterVoyage(this.newVoyage);
//   this.msg = "Voyage"+ this.newVoyage.libelle +" ajouté avec succès";
//   this.id++;
//   form.resetForm();
  

// }
onSubmit(){
  console.log(this.AjouterForm.value);
  this.newVoyage=this.AjouterForm.value;
  console.log(this.newVoyage);
 this.voyageService.ajouterVoyage(this.newVoyage).subscribe( data => this.V.push(data) );
 this.newRegion=this.AjouterForm.value;
 this.newRegion.nom=this.newVoyage.libelle;
 this.newRegion.id=this.newVoyage.id;
this.regionService.ajouterRegion(this.newRegion).subscribe( dataR =>this.R.push(dataR) );
}

  ngOnInit(): void {
    this.voyageService.getVoyage().subscribe(dataV=>this.V = dataV);
    this.regionService.getRegion().subscribe(dataR=>this.R = dataR);
    
    this.AjouterForm = this.fb.group({

//VOYAGE
     libelle:[''],
     prix:[],
     Description:[''],
     Image:[''],
     categorie:[''],
    
//REGION

DescriptionH:[''],
DescriptionDetaillee:[''],
img:[''],
Activites1:[''],
Activites1Prix:[0],
Activites2:[''],
Activites2Prix:[0],
Activites3:[''],
Activites3Prix:[0],
HotelNom:[''],
HotelImage:[''],
HotelPrix:[''],
HotelPromo:[0],
HotelDescription:[''],
AubergeNom:[''],
AubergeImage:[''],
AubergePrix:[''],
AubergeDescription:[''],
AubergePromo:[0],


    })
    
  }

}

