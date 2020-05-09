import { Routes } from '@angular/router';

import {CarListComponent} from '../car-list/car-list.component';
import {SearchComponent} from '../search/search.component';
import { LoginComponent } from 'src/app/login/login.component';
import { RegistrationComponent } from 'src/app/registration/registration.component';

export const UserLayoutRoutes: Routes = [
  { path: 'carlist', component: CarListComponent },
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent }

];
