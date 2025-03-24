import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  private loggedInSubject = new BehaviorSubject<boolean>(this.isLoggedIn());
  loggedIn$ = this.loggedInSubject.asObservable();

  constructor(private userService: UserService) {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.userSubject.next(userData);
    }
  }

  login(): void {
    localStorage.setItem('isLoggedIn', 'true');
    this.loggedInSubject.next(true);
  }
  
  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    const token = this.userService.getToken();
    return token !== null && token !== '';
  }

  // Get the JWT token (from UserService)
  getAuthToken(): string {
    return this.userService.getToken();
  }

  getUser(): any {
    return this.userSubject.value;
  }

  getUserId(): string {
    return this.userSubject.value?.id || '';
  }

  logout(): void {
    this.userSubject.next(null);
    localStorage.removeItem('user');
    this.userService.logout();
    localStorage.removeItem('islogin');
    localStorage.removeItem('authToken');
    this.loggedInSubject.next(false);
  }
}
