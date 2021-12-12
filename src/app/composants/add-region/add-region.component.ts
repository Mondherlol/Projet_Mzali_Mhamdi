import { RegionService } from 'src/app/services/region.service';
import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/model/region';
import { Voyage } from 'src/app/model/voyage';
import { VoyageService } from 'src/app/services/voyage.service';
import { FormArray, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.css']
})
export class AddRegionComponent implements OnInit {
  AjouterForm:FormGroup;
  RegionForm:FormGroup;
  newRegion=new Region();
  V : Voyage [];
  R : Region [];
  newVoyage=new Voyage();
  id:number=0;
  msg : string;
  constructor(private regionService:RegionService,private voyageService:VoyageService,private fb:FormBuilder,private router: Router) { }

Ajouter(){
  this.newVoyage=this.AjouterForm.value;
  this.newVoyage.nbVisites=0;
  this.voyageService.ajouterVoyage(this.newVoyage).subscribe( data => this.V.push(data) );

  this.newRegion.nom=this.newVoyage.libelle;
  this.newRegion.prix=this.AjouterForm.controls.prix.value;
  // this.newRegion.activites[0]=this.RegionForm.controls.Activites1.value;
  // this.newRegion.activites[1]=this.RegionForm.controls.Activites2.value;
  // this.newRegion.activites[2]=this.RegionForm.controls.Activites3.value;
  // this.newRegion.activitesPrix[0]=this.RegionForm.controls.Activites1Prix.value;
  // this.newRegion.activitesPrix[1]=this.RegionForm.controls.Activites2Prix.value;
  // this.newRegion.activitesPrix[2]=this.RegionForm.controls.Activites3Prix.value;

  this.newRegion=this.RegionForm.value;

  this.regionService.ajouterRegion(this.newRegion).subscribe(data => this.R.push(data));
alert("La région a bien été ajoutée !");

this.router.navigate(['/admin']);

}
onSubmit(){
  // console.log(this.AjouterForm.value);
  // this.newVoyage=this.AjouterForm.value;
  // console.log(this.newVoyage);
//  this.voyageService.ajouterVoyage(this.AjouterForm.value).subscribe( data => this.V.push(data) );


//  this.newRegion=this.AjouterForm.value;
//  this.newRegion.nom=this.newVoyage.libelle;
//  this.newRegion.activites[0]=this.AjouterForm.controls.activites1.value;
//  this.newRegion.activites[1]=this.AjouterForm.controls.activites2.value;
//  this.newRegion.activites[2]=this.AjouterForm.controls.activites3.value;
// this.newRegion.activitesPrix[0]=this.AjouterForm.controls.Activites1Prix.value;
// this.newRegion.activitesPrix[1]=this.AjouterForm.controls.Activites2Prix.value;
// this.newRegion.activitesPrix[2]=this.AjouterForm.controls.Activites3Prix.value;
// this.newRegion.id=this.newVoyage.id;  
// this.regionService.ajouterRegion(this.newRegion).subscribe( dataR =>this.R );
}
supprimerActivite(i:number){
  // alert(this.fb.control(activites[i]));
  // this.V.splice()

  // this.activites.split(this.fb.control(''));
  this.activites.removeAt(i);
  this.activitesPrix.removeAt(i);

  }
onAjouter(){
  this.activites.push(this.fb.control(''));
  this.onAjouterPrix();

}  
onAjouterPrix(){
  this.activitesPrix.push(this.fb.control(''));

}
public get activites(){
  return this.RegionForm.get('activites') as FormArray;
}
public get activitesPrix(){
  return this.RegionForm.get('activitesPrix') as FormArray;
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
    


    })
    this.RegionForm = this.fb.group({
//REGION

DescriptionH:[''],
DescriptionDetaillee:[''],
img:[''],
// Activites1:['zerze'],
// Activites1Prix:[50],
// Activites2:['erezr'],
// Activites2Prix:[545],
// Activites3:['fsdds'],
// Activites3Prix:[53],
activites:this.fb.array(['']),
activitesPrix:this.fb.array(['']),

HotelNom:[''],
HotelImage:[''],
HotelPrix:[],
HotelPromo:[0],
HotelDescription:[''],
AubergeNom:[''],
AubergeImage:[''],
AubergePrix:[],
AubergeDescription:[''],
AubergePromo:[0],
    })

    
  }

}

