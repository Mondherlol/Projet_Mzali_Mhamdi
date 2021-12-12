import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Reservation } from '../model/reservation';
const URL = 'http://localhost:3000/Reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  ajouterReservation(reservation:Reservation):Observable<Reservation>{
    return this.http.post<Reservation>(URL, reservation);
  }
  getReservation():Observable<Reservation[]>{
    return this.http.get<Reservation[]>(URL);
    }
  constructor(private http:HttpClient) { }
}
