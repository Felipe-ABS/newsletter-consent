import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ConsentService {
  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getUserConsents(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  
  createUserConsent(userData: any): Observable<any> {
    return this.http.post(this.baseUrl, userData);
  }
}
