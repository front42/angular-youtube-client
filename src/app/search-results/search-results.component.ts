import { Component, effect } from '@angular/core';

import { SearchItemComponent } from '../search-item/search-item.component';
import { DataService } from '../data.service';
import { IItem } from '../interfaces';
import { searchSignal } from '../search/search.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
  imports: [SearchItemComponent],
})
export class SearchResultsComponent {
  protected items: IItem[] = [];

  constructor(private dataService: DataService) {
    effect(() => {
      if (searchSignal().trim()) {
        this.getItems(searchSignal());
      } else this.items = [];
    });
  }

  protected getItems(search: string): void {
    this.dataService.getItems().subscribe((items) => {
      this.items = items.filter((item) => item.snippet.title.toLowerCase().includes(search.toLowerCase()));
    });
  }
}
