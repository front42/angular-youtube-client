import { Component } from '@angular/core';

import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  imports: [MatRippleModule],
})
export class SearchComponent {
  protected settings: boolean = false;
  protected sort!: 'date' | 'views' | 'words';
}
