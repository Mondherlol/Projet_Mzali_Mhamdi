export class Region {
    constructor(
        public id?:number,
        public nom?:string,
        public prix?:number,
        public DescriptionH?:string,
        public DescriptionDetaillee?:string,
        public img?:string,
        public activites?:string[],
        public activitesPrix?:number[],
        public HotelNom?:string,
        public HotelPrix?:number,
        public HotelImage?:string,
        public HotelDescription?:string,
        public HotelPromo?:number,
        public AubergeNom?:string,
        public AubergePrix?:number,
        public AubergeImage?:string,
        public AubergeDescription?:string,
        public AubergePromo?:number,
     
    ){}
}
