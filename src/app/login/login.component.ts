import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [MatRippleModule],
})
export class LoginComponent {}
