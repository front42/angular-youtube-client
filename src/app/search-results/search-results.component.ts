import { Component, OnInit } from '@angular/core';

import { SearchItemComponent } from '../search-item/search-item.component';
import { DataService } from '../data.service';
import { IItem } from '../interfaces';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
  imports: [SearchItemComponent],
})
export class SearchResultsComponent implements OnInit {
  protected items: IItem[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getItems().subscribe((items) => {
      this.items = items;
    });
  }
}
