import { RegionService } from 'src/app/services/region.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/model/region';
import { Voyage } from 'src/app/model/voyage';
import { VoyageService } from 'src/app/services/voyage.service';
import {  Input  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


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


  ngOnInit(): void {
  //   this.voyageService.getVoyage().subscribe(dataV=>this.V = dataV);
  //   console.log(this.newVoyage.libelle);
  //   this.regionService.getRegion().subscribe(dataR=>this.R = dataR);
  // console.log(this.activatedRoute.snapshot.params.id);
  
    // this.voyageService.getVoyageById(this.activatedRoute.snapshot.params.id).subscribe(data=>this.newVoyage=data);
    // this.regionService.getRegionById(this.activatedRoute.snapshot.params.id).subscribe(dataRI=>this.newRegion=dataRI);
    // console.log(this.V);
    // console.log(this.V[0].libelle);
    this.voyageService.getVoyageById(this.activatedRoute.snapshot.params.id).subscribe(data=>this.newVoyage=data);

    this.VoyageForm = this.fb.group({

      //VOYAGE
           libelle:[this.newVoyage.libelle],
           prix:[],
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
  constructor(private activatedRoute:ActivatedRoute,private regionService:RegionService,private voyageService:VoyageService,private fb:FormBuilder) { 
   this.voyageService.getVoyage().subscribe(dataV=>this.V=dataV);
  }

}
