export class Voyage {
    constructor(
     public id?:number,
     public libelle?:string,
     public prix?:number,
     public Description?:string,
     public Image?:string,
     public Promo?:boolean,
     public categorie?:string,
     public nbVisites:number=0,

    ){

    }
}
