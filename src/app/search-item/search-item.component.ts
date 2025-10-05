import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';

import { IItem } from '../interfaces';
import { AgeColorDirective } from '../age-color.directive';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.scss',
  imports: [MatRippleModule, AgeColorDirective],
})
export class SearchItemComponent {
  @Input() public item!: IItem;

  constructor(private router: Router) {}

  showDetails(): void {
    console.log(this.item);
    this.router.navigate(['/item', this.item.id]);
  }
}
