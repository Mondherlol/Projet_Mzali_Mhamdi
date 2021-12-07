import { RegionService } from 'src/app/services/region.service';
import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/model/region';
import { Voyage } from 'src/app/model/voyage';
import { VoyageService } from 'src/app/services/voyage.service';
import { FormArray, FormBuilder, FormGroup, NgForm } from '@angular/forms';

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
Ajouter(){
  
  this.voyageService.ajouterVoyage(this.AjouterForm.value).subscribe( data => this.V.push(data) );

  this.newRegion.nom=this.AjouterForm.controls.libelle.value;
  this.newRegion.prix=this.AjouterForm.controls.prix.value;
  alert(this.newRegion.nom);
  // this.newRegion.activites[0]=this.RegionForm.controls.Activites1.value;
  // this.newRegion.activites[1]=this.RegionForm.controls.Activites2.value;
  // this.newRegion.activites[2]=this.RegionForm.controls.Activites3.value;
  // this.newRegion.activitesPrix[0]=this.RegionForm.controls.Activites1Prix.value;
  // this.newRegion.activitesPrix[1]=this.RegionForm.controls.Activites2Prix.value;
  // this.newRegion.activitesPrix[2]=this.RegionForm.controls.Activites3Prix.value;

  this.newRegion=this.RegionForm.value;

  this.regionService.ajouterRegion(this.newRegion).subscribe(data => this.R.push(data));
alert("La région  a bien été ajoutée !");
}
onSubmit(){
  // console.log(this.AjouterForm.value);
  // this.newVoyage=this.AjouterForm.value;
  // console.log(this.newVoyage);
  alert("Test");
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
onAjouter(){
  this.activites.push(this.fb.control(''));

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
     libelle:['sdfsdf'],
     prix:[50],
     Description:['sdfsdf'],
     Image:['/assets/Kansai.jpg'],
     categorie:['Historique'],
    


    })
    this.RegionForm = this.fb.group({
//REGION

DescriptionH:['zeezr'],
DescriptionDetaillee:['zerzer'],
img:['/assets/Kansai.jpg'],
// Activites1:['zerze'],
// Activites1Prix:[50],
// Activites2:['erezr'],
// Activites2Prix:[545],
// Activites3:['fsdds'],
// Activites3Prix:[53],
activites:this.fb.array(['']),
activitesPrix:this.fb.array(['']),

HotelNom:['sdfdsf'],
HotelImage:['fsdsd'],
HotelPrix:[25],
HotelPromo:[0],
HotelDescription:['sdfds'],
AubergeNom:['sdfds'],
AubergeImage:['sdfds'],
AubergePrix:[50],
AubergeDescription:['dsfsdf'],
AubergePromo:[10],
    })

    
  }

}

