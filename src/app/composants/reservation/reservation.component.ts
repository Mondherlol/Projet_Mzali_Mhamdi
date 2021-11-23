import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Region } from 'src/app/model/region';
import { RegionService } from 'src/app/services/region.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  Region: Region;

  constructor(private regionService:RegionService,private activatedRoute:ActivatedRoute ) { }
  id : number;
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.Region=this.regionService.getRegionById(this.id);
  }

}
