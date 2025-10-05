import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

const DAY_MILLISECONDS: number = 86400000;

@Directive({
  selector: '[appAgeColor]',
})
export class AgeColorDirective implements OnInit {
  @Input('appAgeColor') publishedAt!: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    const ageDays = (Date.now() - Date.parse(this.publishedAt)) / DAY_MILLISECONDS;

    let ageColor = ageDays < 7 ? '#2f80ed' : ageDays < 30 ? 'green' : ageDays < 180 ? 'yellow' : 'red';

    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', ageColor);

    const className = (this.elementRef.nativeElement.className || '').toLowerCase();
    if (className.split(/\s+/).includes('back-btn')) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'box-shadow', `-2px 2px 4px -2px ${ageColor}`);
    }
    if (className.split(/\s+/).includes('shadow-wrapper')) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'box-shadow', `5px 5px 11px -5px ${ageColor}`);
    }
  }
}
