import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class GiveConsentService {
  private baseUrl = "http://localhost:3000/consents";
  constructor(private http: HttpClient) {}

  getUser(): Observable<User> {
    return this.http.get<User>(this.baseUrl);
  }
  
  createUser(userData: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, userData);
  }
}
