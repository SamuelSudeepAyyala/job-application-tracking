import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://localhost:7283/api/auth';

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  register(registerData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, registerData);
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }

  // Set token in localStorage
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Clear token (on logout)
  logout(): void {
    localStorage.removeItem('token');
  }
}
