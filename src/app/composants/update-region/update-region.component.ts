import { RegionService } from 'src/app/services/region.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/model/region';

@Component({
  selector: 'app-update-region',
  templateUrl: './update-region.component.html',
  styleUrls: ['./update-region.component.css']
})
export class UpdateRegionComponent implements OnInit {
currentRegion= new Region();
  
  constructor(private activatedRoute:ActivatedRoute,private regionService:RegionService) { 

  }

  ngOnInit(): void {
  console.log(this.activatedRoute.snapshot.params.id);
  }

}
