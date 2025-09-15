import { ChangeDetectionStrategy, ChangeDetectorRef, Component, WritableSignal, effect, signal } from '@angular/core';
import { take } from 'rxjs/operators';

import { SearchItemComponent } from '../search-item/search-item.component';
import { DataService } from '../data.service';
import { IItem } from '../interfaces';
import { searchSignal, sortSignal, filterSignal, dateDescendingSignal, viewsDescendingSignal } from '../search/search.component';
import { FilterByWordsPipe } from '../filter-by-words.pipe';

export const itemsLengthSignal: WritableSignal<number> = signal(0);

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
  imports: [SearchItemComponent, FilterByWordsPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent {
  protected originalItems: IItem[] = [];
  protected items: IItem[] = [];
  protected filterQuery!: string;

  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef,
  ) {
    effect(() => {
      const searchFieldValue = searchSignal().trim();
      if (searchFieldValue) {
        this.getItems(searchFieldValue);
      } else {
        this.originalItems = [];
        this.items = [];
        itemsLengthSignal.set(0);
        this.cdr.markForCheck();
      }
    });

    effect(() => {
      this.sortItems();
      this.cdr.markForCheck();
    });

    effect(() => {
      this.filterQuery = filterSignal();
      this.cdr.markForCheck();
    });
  }

  protected getItems(search: string): void {
    this.dataService
      .getItems()
      .pipe(take(1))
      .subscribe((items) => {
        this.originalItems = items.filter((item) => item.snippet.title.toLowerCase().includes(search.toLowerCase()));
        this.items = [...this.originalItems];
        itemsLengthSignal.set(this.items.length);
        this.sortItems();
        this.cdr.markForCheck();
      });
  }

  protected sortItems(): void {
    const sortBy = sortSignal();
    if (!sortBy) {
      this.items = [...this.originalItems];
    }
    if (sortBy === 'date') {
      this.items = dateDescendingSignal()
        ? [...this.items].sort((a: IItem, b: IItem) => (a.snippet.publishedAt < b.snippet.publishedAt ? 1 : -1))
        : [...this.items].sort((a: IItem, b: IItem) => (a.snippet.publishedAt > b.snippet.publishedAt ? 1 : -1));
    }
    if (sortBy === 'views') {
      this.items = viewsDescendingSignal()
        ? [...this.items].sort((a: IItem, b: IItem) => +b.statistics.viewCount - +a.statistics.viewCount)
        : [...this.items].sort((a: IItem, b: IItem) => +a.statistics.viewCount - +b.statistics.viewCount);
    }
  }
}
