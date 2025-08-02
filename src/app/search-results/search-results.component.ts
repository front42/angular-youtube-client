import { Component } from '@angular/core';

import { SearchItemComponent } from '../search-item/search-item.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
  imports: [SearchItemComponent],
})
export class SearchResultsComponent {
  protected itemNumbers: number[] = [21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
}
