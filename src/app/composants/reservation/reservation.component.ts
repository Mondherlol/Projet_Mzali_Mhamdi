import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Region } from 'src/app/model/region';
import { RegionService } from 'src/app/services/region.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  Region: Region;
  onSubmit(){
    alert("Test");
  }
  constructor(private regionService:RegionService,private activatedRoute:ActivatedRoute ) { }
  id : number;
  verifier(){
    alert("Etes vous sûr ?");
    
  }
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
  //   this.Region=this.regionService.getRegionById(this.id);

  //  this.regionService.getRegion().subscribe(dataR=>this.region= dataR);
   this.regionService.getRegionById(this.id).subscribe(dataRI=>this.Region=dataRI);


    
  }

}
