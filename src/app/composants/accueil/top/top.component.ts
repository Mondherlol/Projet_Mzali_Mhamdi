import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  motcle:string=""
  rechercher(r:string){
    console.log(r);
    this.motcle=r;
  }
  
  constructor() { }
  onSubmit(f: NgForm) {
    console.log(f.value);
  }
  ngOnInit(): void {
  }

}
