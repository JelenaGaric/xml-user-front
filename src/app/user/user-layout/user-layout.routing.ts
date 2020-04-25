import { Routes } from '@angular/router';

import {CarListComponent} from '../car-list/car-list.component';
import {SearchComponent} from '../search/search.component';
import { LoginComponent } from 'src/app/login/login.component';
import { RegistrationComponent } from 'src/app/registration/registration.component';
import { AdvancedSearchComponent } from '../advanced-search/advanced-search.component';

export const UserLayoutRoutes: Routes = [
  { path: 'user/carlist', component: CarListComponent },
  { path: 'search', component: AdvancedSearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent }
];
