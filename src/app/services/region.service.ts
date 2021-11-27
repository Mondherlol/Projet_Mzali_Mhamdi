import { Injectable } from '@angular/core';
import { Region } from '../model/region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  private region:Region[]=[
    new Region(1,"Hokkaido",6000,"La nature préservée de cette préfecture séduit les amateurs de plein air, tandis que ses villes, nichées entre montagnes et lacs, attirent gourmets et férus de culture","Hokkaido révèle ses nombreux charmes tout au long de l'année. En été, le temps doux est idéal pour aller explorer les collines vertes et les parcs nationaux de la préfecture. Partez à la découverte des lacs, des rivières et des montagnes de Hokkaido en faisant de la randonnée, du VTT, du canoë ou du rafting. Observez les animaux et les oiseaux dans leur habitat naturel et baignez-vous dans des eaux volcaniques au cœur d'un paysage à couper le souffle. En hiver, l'île vit au rythme de ses nombreuses et célèbres stations de ski. La préfecture propose également d'autres activités de sports d'hiver comme des randonnées en raquettes, des promenades en traîneau à chiens et des excursions en motoneige. Profitez de votre venue en cette saison pour assister à l'un des plus grands festivals du Japon : le festival de la neige de Sapporo.","assets/Hokkaido/1.jpg")
  ];
  getRegion(){
    return this.region;
  }
  getRegionById(id :number) {
    return this.region.find(i=>i.id==id);
}

  constructor() { }
}
