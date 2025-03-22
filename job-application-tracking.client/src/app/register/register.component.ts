import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // Register model to hold the form data
  registerModel = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  // Injecting UserService and Router into the constructor
  constructor(private userService: UserService, private router: Router) { }

  // Called when the form is submitted
  onSubmit() {
    // Checking if the passwords match
    if (this.registerModel.password !== this.registerModel.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Call the register method from UserService to hit the backend API
    this.userService.register(this.registerModel).subscribe(
      (response) => {
        // Log success response
        console.log('Registration successful!', response);

        // After successful registration, navigate to the login page
        this.router.navigate(['/login']);
      },
      (error) => {
        // Log error response
        console.error('Registration failed:', error);

        // Alert user if registration fails
        alert('Registration failed. Please try again.');
      }
    );
  }
}
