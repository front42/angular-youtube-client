import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
  @ViewChild('sortInput') protected sortInput!: ElementRef;

  constructor(private router: Router) {}

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
