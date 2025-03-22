import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = {
    username: '',
    password: ''
  };

  constructor(private userService: UserService, private router: Router) { }

  login() {
    this.userService.login(this.user).subscribe(
      response => {
        alert('Login successful');
        this.router.navigate(['/dashboard']);
      },
      error => {
        alert('Error: ' + error.error);
      }
    );
  }
}
