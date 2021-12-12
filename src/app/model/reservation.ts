
export class Reservation {
  constructor(
    public id?:number,
    public destination?:string,
    public dateDebut?:Date,
    public dateFin?:Date,
    public activitesChoisi?:string[],
    public nbrAdulte?:number,
    public nbrEnfants?:number,
    public hotel?:boolean,
    public facture?:number,
    public numeroC?:number,
    public mailC?:string,

  ){}
}
