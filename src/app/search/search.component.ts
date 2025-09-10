import { Component, ElementRef, ViewChild, WritableSignal, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';

import { itemsLengthSignal } from '../search-results/search-results.component';

export const searchSignal: WritableSignal<string> = signal('');
export const sortSignal: WritableSignal<TypeOfSort> = signal('');
export const dateDescendingSignal: WritableSignal<boolean> = signal(false);
export const viewsDescendingSignal: WritableSignal<boolean> = signal(false);
export const filterSignal: WritableSignal<string> = signal('');

export type TypeOfSort = '' | 'date' | 'views';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  imports: [MatRippleModule, FormsModule],
})
export class SearchComponent {
  protected searchInputValue: string = '';
  protected settings: boolean = false;
  protected sortBy: TypeOfSort = '';
  @ViewChild('filterInput') protected filterInput!: ElementRef;

  constructor(private router: Router) {}

  protected get itemsLength(): number {
    return itemsLengthSignal();
  }

  protected toggleSettings(): void {
    this.settings = !this.settings;
    this.sortBy = '';
    sortSignal.set('');
    dateDescendingSignal.set(false);
    viewsDescendingSignal.set(false);
  }

  protected getItems(): void {
    searchSignal.set(this.searchInputValue);
  }

  protected sortItems(sortBy: TypeOfSort): void {
    this.sortBy = sortBy;
    sortSignal.set(sortBy);
    if (sortBy === 'date') {
      dateDescendingSignal.set(!dateDescendingSignal());
      viewsDescendingSignal.set(false);
    }
    if (sortBy === 'views') {
      viewsDescendingSignal.set(!viewsDescendingSignal());
      dateDescendingSignal.set(false);
    }
  }

  protected filterItems(query: string): void {
    filterSignal.set(query);
  }

  protected goMain(): void {
    this.router.navigate(['']);
  }
}
