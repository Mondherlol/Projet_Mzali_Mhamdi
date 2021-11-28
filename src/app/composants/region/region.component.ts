import { RegionService } from 'src/app/services/region.service';
import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/model/region';
import { Voyage } from 'src/app/model/voyage';
import { VoyageService } from 'src/app/services/voyage.service';
@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
region :Region[];//un tableau de region 
voyage: Voyage[];

  constructor(private regionService:RegionService,private voyageService:VoyageService) { 
 this.region=this.regionService.getRegion();
 this.voyage=this.voyageService.getVoyage();
  }
  supprimerRegion(reg:Region){
    // console.log(region);
let conf=confirm("Etes-vous sûr ?");
if (conf)
    this.regionService.supprimerRegion(reg);
  }
  supprimerVoyage(voy:Voyage){
    let conf=confirm("Etes-vous sûr ?");
    if (conf)
    this.voyageService.supprimerVoyage(voy);
  }
  ngOnInit(): void {
  }

}
