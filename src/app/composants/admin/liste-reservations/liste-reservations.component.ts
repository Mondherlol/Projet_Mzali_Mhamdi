import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/model/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-liste-reservations',
  templateUrl: './liste-reservations.component.html',
  styleUrls: ['./liste-reservations.component.css']
})
export class ListeReservationsComponent implements OnInit {
  reservations:Reservation[];
  constructor(private reservationService:ReservationService) { }
valider(id:number){
 
  let conf=confirm("Valider cette réservation ?");
if (conf)

this.reservationService.supprimerReservation(id).subscribe(
  ()=> {this.reservations = this.reservations.filter(l => l.id != id);}
)
}
  ngOnInit(): void {
    this.reservationService.getReservation().subscribe(data=>this.reservations=data);
  }

}
