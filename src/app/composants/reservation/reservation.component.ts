import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Region } from 'src/app/model/region';
import { RegionService } from 'src/app/services/region.service';
import { FormBuilder, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  Region: Region;
 
  ReserverForm:FormGroup= new FormGroup({});

  constructor(private regionService:RegionService,private activatedRoute:ActivatedRoute,private fb:FormBuilder
    ) { }
  id : number;
  verifier(){
    alert("Etes vous sûr ?");

  }
  ecartH:number=0;
  ecartD:any;

jour = new Date().toJSON().split('T')[0];
jourmin = new Date().toJSON().split('T')[0];
jourRetour= new Date(   new Date().setDate(new Date().getDate() + 3) ).toJSON().split('T')[0];

prix:number=0;
magique(){
  this.calculerEcart();
  this.calculerPrix();
}
calculerPrix(){
 this.prix=this.Region.HotelPrix*this.calculerEcart();
 if (this.ReserverForm.controls.activites1.value){
   this.prix=this.prix+this.Region.activitesPrix[0];
 }
 if (this.ReserverForm.controls.activites2.value){
  this.prix=this.prix+this.Region.activitesPrix[1];
}
if (this.ReserverForm.controls.activites3.value){
  this.prix=this.prix+this.Region.activitesPrix[2];
}
//  if (this.ReserverForm.controls.dateDebut.value)
 if (this.prix<0){
   this.prix=0;
 }

}
datemax(){
  this.jourmin=  new Date(this.ReserverForm.controls.dateDebut.value).toJSON().split('T')[0];
  this.calculerEcart();
  this.calculerPrix();
}
calculerEcart(){
  var date1:any = new Date(this.ReserverForm.controls.dateDebut.value);
  var date2:any = new Date(this.ReserverForm.controls.dateFin.value);
  var diffDays:any = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
  return diffDays;
  
}
  onSubmit(){
 
    var date1:any = new Date(this.ReserverForm.controls.dateDebut.value);
    var date2:any = new Date(this.ReserverForm.controls.dateFin.value);
    var diffDays:any = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
    if(diffDays<2){
      alert("Votre date de retour est incorrecte");
    }
    console.log(diffDays);
  }

  ngOnInit(): void {

    this.ReserverForm = this.fb.group({
      dateDebut:[this.jour,Validators.required],
      dateFin:[     this.jourRetour        ,Validators.required],
      nbrAdulte:[1],
      nbrEnfants:[0],
      activites1:false,
      activites2:false,
      activites3:false,
      mailC:['',Validators.required],
      numeroC:[,Validators.required],

    })
    this.id=this.activatedRoute.snapshot.params['id'];

   this.regionService.getRegionById(this.id).subscribe(dataRI=>this.Region=dataRI);



    
  }


}
