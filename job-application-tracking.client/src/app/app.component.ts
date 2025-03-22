import { Router } from '@angular/router'; 
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'Job Application Tracking';

  constructor(private router: Router) { }

  // Function to navigate to the login page
  goToLogin() {
    this.router.navigate(['/login']);
  }

  // Function to navigate to the register page
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
