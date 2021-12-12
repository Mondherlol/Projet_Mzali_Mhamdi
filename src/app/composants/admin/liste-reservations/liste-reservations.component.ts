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

  ngOnInit(): void {
    this.reservationService.getReservation().subscribe(data=>this.reservations=data);
  }

}
