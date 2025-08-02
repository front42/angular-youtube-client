import { Component, Input } from '@angular/core';

import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.scss',
  imports: [MatRippleModule],
})
export class SearchItemComponent {
  @Input() public itemNumber!: number;
}
