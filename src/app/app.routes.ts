import { Routes } from '@angular/router';

import { SearchResultsComponent } from './search-results/search-results.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: SearchResultsComponent },
  { path: 'item/:id', component: ItemDetailsComponent },
  { path: '**', component: NotFoundComponent },
];
