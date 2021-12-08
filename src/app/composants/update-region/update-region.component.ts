import { RegionService } from 'src/app/services/region.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/model/region';
import { Voyage } from 'src/app/model/voyage';
import { VoyageService } from 'src/app/services/voyage.service';
import {  Input  } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-update-region',
  templateUrl: './update-region.component.html',
  styleUrls: ['./update-region.component.css']
})
export class UpdateRegionComponent implements OnInit {
currentRegion= new Region();
newRegion: Region ;
V : Voyage [];
R : Region [];
newVoyage:Voyage = new Voyage;
id:number=0;
msg : string;
VoyageForm:FormGroup;
RegionForm:FormGroup;

 
  onModifier(){
    this.voyageService.modifier(this.activatedRoute.snapshot.params.id, this.VoyageForm.value).subscribe();
    
               
  }
test(){
  console.log(this.VoyageForm.value);
}

// set   (l:string){
//   this.customer=c;
//   this.complexForm.get("name").setValue(c.name,{onlySelf:true});
// }
 newV(){
  let V=this.newVoyage;
  return V.libelle;
}
public get activites(){
  return this.RegionForm.get('activites') as FormArray;

}
public get activitesPrix(){
  return this.RegionForm.get('activitesPrix') as FormArray;

}
onAjouter(){
  this.activites.push(this.fb.control(''));
  this.onAjouterPrix();

}  
onAjouterPrix(){
  this.activitesPrix.push(this.fb.control(''));
  

}

  ngOnInit(): void {
  //   this.voyageService.getVoyage().subscribe(dataV=>this.V = dataV);
  //   console.log(this.newVoyage.libelle);
  //   this.regionService.getRegion().subscribe(dataR=>this.R = dataR);
  // console.log(this.activatedRoute.snapshot.params.id);
  
    // this.voyageService.getVoyageById(this.activatedRoute.snapshot.params.id).subscribe(data=>this.newVoyage=data);
    // this.regionService.getRegionById(this.activatedRoute.snapshot.params.id).subscribe(dataRI=>this.newRegion=dataRI);
    // console.log(this.V);
    // console.log(this.V[0].libelle);
    // this.voyageService.getVoyageById(this.activatedRoute.snapshot.params.id).subscribe(data=>this.VoyageForm.controls['libelle'].setValue(data.libelle)   );
    // this.voyageService.getVoyageById(this.activatedRoute.snapshot.params.id).subscribe(data=>this.VoyageForm.controls['prix'].setValue(data.prix)   );
    this.voyageService.getVoyageById(this.activatedRoute.snapshot.params.id).subscribe(data=>this.VoyageForm.patchValue({
      libelle:data.libelle,
      prix:data.prix,
      Description:data.Description,
      Image:data.Image,
      categorie:data.categorie
   })   );
// this.regionService.getRegionById(this.activatedRoute.snapshot.params.id).subscribe(dataR=>this.RegionForm.controls['DescriptionH'].setValue(dataR.DescriptionH));
   this.regionService.getRegionById(this.activatedRoute.snapshot.params.id).subscribe(data=>this.RegionForm.patchValue({
    DescriptionH:data.DescriptionH,
    DescriptionDetaillee:data.DescriptionDetaillee,
    img:data.img,
    HotelNom:data.HotelNom,
    HotelImage:data.HotelImage,
    HotelPrix:data.HotelPrix,
    HotelPromo:data.HotelPromo,
    HotelDescription:data.HotelDescription,
    AubergeNom:data.AubergeNom,
    AubergeImage:data.AubergeImage,
    AubergePrix:data.AubergePrix,
    AubergeDescription:data.AubergeDescription,
    AubergePromo:data.AubergePromo,
    activites:data.activites,
    activitesPrix:data.activitesPrix,
   }));
   
    this.VoyageForm = this.fb.group({

      //VOYAGE
           libelle:[],
           prix:[],
           Description:[],
           Image:[],
           categorie:[],
          
      
      
          })
          this.RegionForm = this.fb.group({
      //REGION
      
      DescriptionH:[],
      DescriptionDetaillee:[],
      img:[],
      activites:this.fb.array([]),
      activitesPrix:this.fb.array([]),
      
      HotelNom:[],
      HotelImage:[],
      HotelPrix:[],
      HotelPromo:[],
      HotelDescription:[],
      AubergeNom:[],
      AubergeImage:[],
      AubergePrix:[],
      AubergeDescription:[],
      AubergePromo:[],
          })
  
  }
  constructor(private activatedRoute:ActivatedRoute,private regionService:RegionService,private voyageService:VoyageService,private fb:FormBuilder) { 
   this.voyageService.getVoyage().subscribe(dataV=>this.V=dataV);
  }

}
