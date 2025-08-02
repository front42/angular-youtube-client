import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeaderComponent, SearchResultsComponent],
})
export class AppComponent {}
