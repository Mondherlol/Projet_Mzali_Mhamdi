import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditions-d-utilisations',
  templateUrl: './conditions-d-utilisations.component.html',
  styleUrls: ['./conditions-d-utilisations.component.css']
})
export class ConditionsDUtilisationsComponent implements OnInit {
v:number=0;
  constructor() { }

  ngOnInit(): void {
    console.log(this.v++);
  }

}
