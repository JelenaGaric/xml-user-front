import { Routes } from '@angular/router';

import {CarListComponent} from '../car-list/car-list.component';
import {SearchComponent} from '../search/search.component';

export const UserLayoutRoutes: Routes = [
  { path: 'carlist',      component: CarListComponent },
  { path: 'search',   component: SearchComponent },
];
