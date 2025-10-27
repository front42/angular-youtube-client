import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';

import { IItem } from '../interfaces';
import { DataService } from '../data.service';
import { AgeColorDirective } from '../age-color.directive';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.scss',
  imports: [MatRippleModule, AgeColorDirective, DatePipe],
})
export class ItemDetailsComponent implements OnInit {
  protected item!: IItem;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
  ) {}

  protected goMain(): void {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    this.dataService.getItemById(id).subscribe((item) => {
      if (item) this.item = item;
    });
  }
}
