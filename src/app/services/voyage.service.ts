import { Injectable } from '@angular/core';
import { Voyage } from '../model/voyage';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  private Voyage: Voyage[]=[
    
    new Voyage (1, 'Hokkaido', 6000, 
    'Une autre approche du Japon, hors des sentiers battus ou pour un second voyage, au volant et en liberté',
    'assets/Hokkaido.jfif','10 jours',new Date(1/12/2022),new Date(11/12/2022),false,0,"Touristique"),
    new Voyage (2, 'tohoku',6000, 
    'parmi les plus authentiques du Japon, des trésors historiques, des activités de plein air en été et une neige poudreuse abondante en hiver','assets/Tohoku.jfif','10 jours',
    new Date(1/12/2022),new Date(11/12/2022),false,0,"Historique"),
    new Voyage (3, 'Hokuriku Shinetsu',6000, 
    'Mer et montagnes se côtoient dans lune des régions les plus sauvages du Japon, offrant un paysage de toute beauté','assets/Hokuriku Shinetsu.jfif'
    ,'10 jours',new Date(1/12/2022),new Date(11/12/2022),false,0,"Historique"),
    new Voyage (4, 'Kanto', 6000, 
    ' la région de Kanto recèle également des villages de montagne rustiques et de sublimes îles subtropicales',
    'assets/kanto.jpg','10 jours',new Date(1/12/2022),new Date(11/12/2022),false,0,"Traditionnelle"),
    new Voyage (5, 'Tokai', 6000, 'la région du Tokai offre à la fois des destinations de renommée mondiale et des trésors méconnus',
    'assets/Tokai.jpg','10 jours',new Date(1/12/2022),new Date(11/12/2022),false,0,"Touristique"),
    new Voyage (6,'Kansai',7415,'Découvrez une vie nocturne fantastique, des temples et des sanctuaires paisibles ainsi que des pèlerinages introspectifs','assets/Kansai.jpg','5 jours',
    new Date(14/1/2021),new Date(19/1/2022),true,25,"Historique"),
    new Voyage (7,'Chugoku',1400,'La région de Chugoku, moins fréquentée, regorge de beauté rurale, de randonnées enrichissantes et d’une grande richesse historique.','assets/Chugoku.jpg','3 jours',
    new Date(17/2/2021),new Date(20/2/2022),true,2,"Traditionnelle"),
    new Voyage (8,'Shikoku',1400,"Shikoku est peut-être la plus petite des quatre îles principales du Japon, mais elle peut se targuer d'une nature et d'une culture incroyablement riches",'assets/Shikoku.jpg','3 jours',
    new Date(17/2/2021),new Date(20/2/2022),false,0,"Paradisiaque"),
    new Voyage (9,'Kyushu',1400,"Facile d'accès par voie terrestre, maritime et aérienne, Kyushu est une île dynamique qui bouillonne d'énergie, de culture et d'activités",'assets/Kyushu.jpg','3 jours',
    new Date(17/2/2021),new Date(20/2/2022),false,0,"Touristique"),
    new Voyage (10,'Okinawa',1400,"Découvrez une culture insulaire distincte née du soleil subtropical, du sable blanc, des jungles de mangroves et de l'ère des rois Ryukyu",'assets/Okinawa.jpg','3 jours',
    new Date(17/2/2021),new Date(20/2/2022),false,0,"Paradisiaque")
    ];
    getVoyage(){
      return this.Voyage;
    }
    getVoyageById(id :number) {
      return this.Voyage.find(i=>i.id==id);
  }
    getVoyageByMotCle(motcle:string){
      return (this.Voyage.filter(i=>(i.libelle.toLowerCase().includes(motcle.toLowerCase()))||(i.categorie.toLowerCase()==motcle.toLowerCase()) ||(i.Description.toLowerCase().includes(motcle.toLowerCase()) )));
    }
   getVoyageByCategorie(motcle:String){
     return (this.Voyage.filter(i=>(i.categorie==motcle)));
   }
   ajouterVoyage( voy:Voyage){
    let p1 = Object.assign({},voy);
    this.Voyage.push(p1);
  }
  
supprimerVoyage( voy:Voyage){
  //supprimer le Region reg du tableau Region ,je vais l appeler dans region.ts=>supp
   const index = this. Voyage.indexOf(voy, 0);
   if (index > -1) {
     this. Voyage.splice(index, 1);
   }
  }
  constructor() { }
 
}

