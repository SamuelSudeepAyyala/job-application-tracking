import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private userService: UserService, private router: Router) { }

  register() {
    if (this.user.password !== this.user.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    this.userService.register(this.user).subscribe(
      response => {
        alert('Registration successful');
        this.router.navigate(['/login']);
      },
      error => {
        alert('Error: ' + error.error);
      }
    );
  }
}
