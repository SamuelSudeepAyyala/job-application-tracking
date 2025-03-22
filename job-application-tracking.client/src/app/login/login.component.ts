import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginModel = {
    email: '',
    password: '',
  };

  constructor(private userService: UserService, private router: Router) { }

  // Called when the form is submitted
  onSubmit() {
    if (!this.loginModel.email || !this.loginModel.password) {
      alert('Please fill in both email and password');
      return;
    }

    // Call the login method from UserService to hit the backend API
    this.userService.login(this.loginModel).subscribe(
      (response) => {
        console.log('Login successful!', response);
        // Navigate to the dashboard or home page on successful login
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Login failed:', error);
        alert('Invalid credentials. Please try again.');
      }
    );
  }
}
