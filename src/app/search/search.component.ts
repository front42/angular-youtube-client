import { Component, ElementRef, ViewChild, WritableSignal, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';

import { itemsLengthSignal } from '../search-results/search-results.component';

export const searchSignal: WritableSignal<string> = signal('');

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  imports: [MatRippleModule],
})
export class SearchComponent {
  protected settings: boolean = false;
  protected sort: '' | 'date' | 'views' | 'words' = '';
  @ViewChild('sortInput') protected sortInput!: ElementRef;

  constructor(private router: Router) {}

  protected get itemsLength(): number {
    return itemsLengthSignal();
  }

  protected toggleSettings(): void {
    this.settings = !this.settings;
    this.sort = '';
  }

  protected getItems(searchFieldValue: string): void {
    searchSignal.set(searchFieldValue);
  }

  protected sortByDate(): void {
    this.sort = 'date';
    this.sortInput.nativeElement.blur();
    this.sortInput.nativeElement.value = '';
  }

  protected sortByViews(): void {
    this.sort = 'views';
    this.sortInput.nativeElement.blur();
    this.sortInput.nativeElement.value = '';
  }

  protected sortByWords(): void {
    this.sort = 'words';
    this.sortInput.nativeElement.focus();
  }

  protected goMain(): void {
    this.router.navigate(['']);
  }
}
