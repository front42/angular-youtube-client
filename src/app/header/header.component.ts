import { Component } from '@angular/core';

import { SearchComponent } from '../search/search.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [SearchComponent, LoginComponent],
})
export class HeaderComponent {}
