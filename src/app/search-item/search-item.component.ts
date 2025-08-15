import { Component, Input } from '@angular/core';
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
}
