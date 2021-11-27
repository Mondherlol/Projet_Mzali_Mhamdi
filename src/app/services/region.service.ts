import { Injectable } from '@angular/core';
import { Region } from '../model/region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  private region:Region[]=[
    new Region(1,"Hokkaido",6000,"Hokkaido est une jolie ville.","assets/Hokkaido/1.jpg")
  ];
  getRegion(){
    return this.region;
  }
  getRegionById(id :number) {
    return this.region.find(i=>i.id==id);
}

  constructor() { }
}
