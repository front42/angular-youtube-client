import { Routes } from '@angular/router';

import { SearchResultsComponent } from './search-results/search-results.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: SearchResultsComponent },
  { path: '**', component: NotFoundComponent },
];
