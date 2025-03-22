import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:5000/api/auth'; // Your backend URL

  constructor(private http: HttpClient) { }

  // Register method
  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  // Login method
  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }
}
