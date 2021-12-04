import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Voyage } from 'src/app/model/voyage';
import { VoyageService } from 'src/app/services/voyage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rechercher',
  templateUrl: './rechercher.component.html',
  styleUrls: ['./rechercher.component.css']
})
export class RechercherComponent implements OnInit {
  Voyages: Voyage[]=[];
  V: Voyage[]=[];
  lesVoyages:Voyage[]=[];
  motcle: string;



  constructor(private voyageService:VoyageService, private activatedRoute:ActivatedRoute,private router: Router) { }


  ngOnInit(): void {
    this.motcle=this.activatedRoute.snapshot.params['motcle'];

    //Forcer le rechargement de la page à chaque modification du mot cle
    this.router.routeReuseStrategy.shouldReuseRoute = () => {

      return false;
    }

    this.voyageService.getVoyage().subscribe(dataV=>this.V = dataV);
    console.log(this.V);
    console.log(this.Voyages);
    this.voyageService.getVoyage().subscribe(
      
      ()=> this.Voyages = this.V.filter(i=>(i.libelle.toLowerCase().includes(this.motcle.toLowerCase()))||(i.categorie.toLowerCase()==this.motcle.toLowerCase()) ||(i.Description.toLowerCase().includes(this.motcle.toLowerCase()) ))
      );
    
  
      console.log(this.V);
      console.log(this.Voyages);
   
   
  }

}
