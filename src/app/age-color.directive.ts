import { Directive, ElementRef, Host, OnInit, Renderer2 } from '@angular/core';

import { SearchItemComponent } from './search-item/search-item.component';

const DAY_MILLISECONDS: number = 86400000;

@Directive({
  selector: '[appAgeColor]',
})
export class AgeColorDirective implements OnInit {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    @Host() private searchItemComponent: SearchItemComponent,
  ) {}

  ngOnInit(): void {
    const ageDays = (Date.now() - Date.parse(this.searchItemComponent.item.snippet.publishedAt)) / DAY_MILLISECONDS;
    if (ageDays < 7) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#2f80ed');
    } else if (ageDays < 30) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
    } else if (ageDays < 180) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    } else {
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
    }
  }
}
