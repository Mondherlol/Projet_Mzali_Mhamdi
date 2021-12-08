import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';
import { HttpClient } from '@angular/common/http';
const URL = 'http://localhost:3000/Admin';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  
  constructor(private http:HttpClient) { }
}
