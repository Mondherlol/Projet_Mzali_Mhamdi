import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  image:String="";
  nom:String="";
  description:String="";
test(){

  this.image="assets/Kansai.jpg";
  this.nom="Kansai";
  this.description="C'est une très belle région.";
}

  constructor() { }

  ngOnInit(): void {
  }

}
