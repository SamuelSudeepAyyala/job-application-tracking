import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { AuthService } from '../../services/auth/auth.service'; 

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

  constructor(private userService: UserService,private authService: AuthService, private router: Router) { }

  // Called when the form is submitted
  onSubmit() {
    if (!this.loginModel.email || !this.loginModel.password) {
      alert('Please fill in both email and password');
      return;
    }

    // Call the login method from UserService to hit the backend API
    this.userService.login(this.loginModel).subscribe(
      (response) => {
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('userId', response.userId);
        localStorage.setItem('username', response.username);
        localStorage.setItem('islogin', JSON.stringify(true));
        console.log('Login successful!', response);
        this.authService.login();
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
