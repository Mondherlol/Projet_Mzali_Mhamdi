
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit {
  scroll:boolean=false;
  afficher(){
    this.scroll=document.documentElement.scrollTop != 0;
    setInterval(()=> { this.afficher() }, 1);

  }
  topFunction() {
    document.documentElement.scrollTop = 0;
  
}

  constructor( ) { }
  
  ngOnInit(): void {
   this.afficher();
  }

}
