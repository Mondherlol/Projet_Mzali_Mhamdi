import { RegionService } from 'src/app/services/region.service';
import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/model/region';
@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
region :Region[];//un tableau de region 
  constructor(private regionService:RegionService) { 
 this.region=this.regionService.getRegion();
  }
  supprimerRegion(reg:Region){
    // console.log(region);
let conf=confirm("Etes-vous sûr ?");
if (conf)
    this.regionService.supprimerRegion(reg);
  }
  ngOnInit(): void {
  }

}
