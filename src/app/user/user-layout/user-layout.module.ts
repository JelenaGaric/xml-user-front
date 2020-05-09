import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLayoutRoutes } from './user-layout.routing';

import { CarListComponent } from '../car-list/car-list.component';
import { SearchComponent } from '../search/search.component';

import { ChartsModule } from 'ng2-charts';
import { ToastrModule } from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DropdownListModule } from 'ngx-dropdown-list';

import { ComponentsModule } from '../components/components.module';
import { LoginComponent } from 'src/app/login/login.component';
import { RegistrationComponent } from 'src/app/registration/registration.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserLayoutRoutes),
    FormsModule,
    ChartsModule,
    ToastrModule.forRoot(),
    NgbModule,
    ComponentsModule,
    ReactiveFormsModule,
    DropdownListModule,
    ComponentsModule
  ],
  declarations: [
    CarListComponent,
    SearchComponent,
    LoginComponent,
    RegistrationComponent
  ],
  bootstrap: [
  ]
})

export class UserLayoutModule { }
