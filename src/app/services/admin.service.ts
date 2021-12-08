import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';

const URL = 'http://localhost:3000/Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  getAdmin():Observable<Admin[]>{
    return this.http.get<Admin[]>(URL);
    }
    modifier(id:number, admin:Admin):Observable<Admin>{
      return this.http.put<Admin>(URL+"/"+id, admin);
    }

  constructor(private http:HttpClient) { }
}
