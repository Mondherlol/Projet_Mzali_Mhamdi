import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Region } from 'src/app/model/region';
import { RegionService } from 'src/app/services/region.service';
import { FormArray, FormBuilder, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { Reservation } from 'src/app/model/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  Region: Region;
  Reserver:Reservation=new Reservation;
  ReserverForm:FormGroup= new FormGroup({});

  constructor(private regionService:RegionService,private activatedRoute:ActivatedRoute,private fb:FormBuilder,private reservationService:ReservationService) { }
  id : number;
  verifier(){
    alert("Etes vous sûr ?");

  }
  ecartH:number=0;
  ecartD:any;

Hotel:boolean;
jour = new Date().toJSON().split('T')[0];
jourmin = new Date().toJSON().split('T')[0];
jourRetour= new Date(   new Date().setDate(new Date().getDate() + 3) ).toJSON().split('T')[0];

reserverHotel(){
  this.Hotel=true;
  this.calculerPrix()
}
reserverAuberge(){
  this.Hotel=false;
  this.calculerPrix();
}

prix:number=0;
magique(){
  this.calculerEcart();
  this.calculerPrix();
}
calculerPrix(){
  if (this.Hotel){
    if(this.Region.HotelPromo==0){
      this.prix=this.Region.HotelPrix*this.calculerEcart();
      if (this.ReserverForm.controls.nbrAdulte.value>2){
      this.prix=this.prix*2;
      }
    }
    else {
      this.prix=this.calculerPourcentHotel()*this.calculerEcart();
      if (this.ReserverForm.controls.nbrAdulte.value>2){
      this.prix=this.prix*2;
      }
    }
  }
  else {
    if (this.Region.AubergePromo==0){
    this.prix=this.Region.AubergePrix*this.calculerEcart();
    }
    else {
      this.prix=this.calculerPourcentAuberge()*this.calculerEcart();

    }

  }
  for (let i = 0; i < this.activites.length; i++) {
   if (this.activites.controls[i].value){

     this.prix=this.prix+this.activitesPrix.controls[i].value*this.ReserverForm.controls.nbrAdulte.value;
    
     this.prix=this.prix+(this.activitesPrix.controls[i].value*this.ReserverForm.controls.nbrEnfants.value)/2;
   }
    
  }
// for(let a of this.activites.controls){

//   if (a){
//     this.prix=this.prix+this.Region.activitesPrix[0]*this.ReserverForm.controls.nbrAdulte.value;
//     //    this.prix=this.prix+(this.Region.activitesPrix[0]*this.ReserverForm.controls.nbrEnfants.value)/2;
//   }
// }
//  if (this.ReserverForm.controls.activites1.value){
//    this.prix=this.prix+this.Region.activitesPrix[0]*this.ReserverForm.controls.nbrAdulte.value;
//    this.prix=this.prix+(this.Region.activitesPrix[0]*this.ReserverForm.controls.nbrEnfants.value)/2;
//  }
//  if (this.ReserverForm.controls.activites2.value){
//   this.prix=this.prix+this.Region.activitesPrix[1]*this.ReserverForm.controls.nbrAdulte.value;
//   this.prix=this.prix+(this.Region.activitesPrix[1]*this.ReserverForm.controls.nbrEnfants.value)/2;
// }
// if (this.ReserverForm.controls.activites3.value){
//   this.prix=this.prix+this.Region.activitesPrix[2]*this.ReserverForm.controls.nbrAdulte.value;
//   this.prix=this.prix+(this.Region.activitesPrix[2]*this.ReserverForm.controls.nbrEnfants.value)/2;
// }
//  if (this.ReserverForm.controls.dateDebut.value)
 if (this.prix<0){
   this.prix=0;
 }
  // Prix Billet
//  this.prix=this.prix+(418*this.ReserverForm.controls.nbrAdulte.value)+(418*this.ReserverForm.controls.nbrEnfants.value);
//  Prix Bénéfice
//  this.prix=this.prix - ( (10/100) * this.prix);
  
}
calculerPourcentHotel(){

return this.Region.HotelPrix - (this.Region.HotelPrix*this.Region.HotelPromo / 100);

 
}
calculerPourcentAuberge(){

  return this.Region.AubergePrix - (this.Region.AubergePrix*this.Region.AubergePromo / 100);
  
   
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
    // console.log(diffDays);
    // // this.Reserver=new Reservation;
    this.Reserver=this.ReserverForm.value;
    this.Reserver.destination=this.Region.nom;
    this.Reserver.hotel=this.Hotel;
    this.Reserver.facture=this.prix;
    console.log(this.Reserver);
    this.reservationService.ajouterReservation(this.Reserver).subscribe();
    alert("Votre Réservation a bien été effectuée. Nous vous enverrons un mail de confirmation.");

  }
  public get activites(){
    return this.ReserverForm.get('activites') as FormArray;
  }
  public get activitesPrix(){
    return this.ReserverForm.get('activitesPrix') as FormArray;
  }
  public get listeActivites(){
    return this.ReserverForm.get('listeActivites') as FormArray;
  }
  public get mailC()
  { return this.ReserverForm.get('mailC'); }
  public get numeroC()
  { return this.ReserverForm.get('numeroC'); }
  ngOnInit(): void {

    this.ReserverForm = this.fb.group({
      dateDebut:[this.jour,Validators.required],
      dateFin:[     this.jourRetour        ,Validators.required],
      nbrAdulte:[1],
      nbrEnfants:[0],
      // activites1:false,
      // activites2:false,
      // activites3:false,
      activites:this.fb.array([]),
      activitesPrix:this.fb.array([]),
      listeActivites:this.fb.array([]),
      
      mailC:['',[Validators.required, Validators.email]],
      numeroC:[,[Validators.required,Validators.minLength(8),Validators.pattern("^[0-9]*$")]],

    })


  this.regionService.getRegionById(this.activatedRoute.snapshot.params.id).subscribe(data=>{
 data.activites.forEach(a=>{
   this.activites.push(this.fb.control(a));

 }
  );
  data.activitesPrix.forEach(p => {
        this.activitesPrix.push(this.fb.control(p));
       });
       data.activites.forEach(p => {
        this.listeActivites.push(this.fb.control(p));
        console.log(this.listeActivites.controls);
       });
  });
    this.id=this.activatedRoute.snapshot.params['id'];

   this.regionService.getRegionById(this.id).subscribe(dataRI=>this.Region=dataRI);



    
  }


}
