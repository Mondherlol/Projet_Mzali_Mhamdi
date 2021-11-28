import { RegionService } from 'src/app/services/region.service';
import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/model/region';

@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.css']
})
export class AddRegionComponent implements OnInit {

  newRegion=new Region();
  msg : string;
  constructor(private regionService:RegionService) { }
addRegion(){
  // console.log(this.newRegion);
  this.regionService.ajouterRegion(this.newRegion);
  this.msg = "Region"+ this.newRegion.nom +" ajouté avec succès"
}
  ngOnInit(): void {
  }

}
