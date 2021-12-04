import { RegionService } from 'src/app/services/region.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/model/region';
import { Voyage } from 'src/app/model/voyage';
import { VoyageService } from 'src/app/services/voyage.service';
import {  Input  } from '@angular/core';


@Component({
  selector: 'app-update-region',
  templateUrl: './update-region.component.html',
  styleUrls: ['./update-region.component.css']
})
export class UpdateRegionComponent implements OnInit {
  
currentRegion= new Region();
newRegion=new Region();
V : Voyage [];
newVoyage=new Voyage();
id:number=0;
msg : string;


  constructor(private activatedRoute:ActivatedRoute,private regionService:RegionService,private voyageService:VoyageService) { 

  }
 
  ngOnInit(): void {
  console.log(this.activatedRoute.snapshot.params.id);
    this.newVoyage=this.voyageService.getVoyageById(this.activatedRoute.snapshot.params.id);
    this.regionService.getRegionById(this.activatedRoute.snapshot.params.id).subscribe(dataRI=>this.newRegion=dataRI);

    console.log(this.newVoyage);
  }

}
