import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Voyage } from 'src/app/model/voyage';
import { VoyageService } from 'src/app/services/voyage.service';

@Component({
  selector: 'app-rechercher',
  templateUrl: './rechercher.component.html',
  styleUrls: ['./rechercher.component.css']
})
export class RechercherComponent implements OnInit {
  Voyages: Voyage[]=[];
  motcle: string;


  constructor(private voyageService:VoyageService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.motcle=this.activatedRoute.snapshot.params['motcle'];
    this.Voyages=this.voyageService.getVoyageByMotCle(this.motcle);
  }

}
