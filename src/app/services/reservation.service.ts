import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';
import { HttpClient } from '@angular/common/http';
import { Reservation } from '../model/reservation';
const URL = 'http://localhost:3000/Admin';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  ajouterReservation(reservation:Reservation):Observable<Reservation>{
    return this.http.post<Reservation>(URL, reservation);
  }

  constructor(private http:HttpClient) { }
}
