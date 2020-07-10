import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLayoutRoutes } from './user-layout.routing';

import { CarListComponent } from '../car-list/car-list.component';
import { SearchComponent } from '../search/search.component';
import {RentRequestComponent} from '../rent-request/rent-request.component';

import { ChartsModule } from 'ng2-charts';
import { ToastrModule } from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DropdownListModule } from 'ngx-dropdown-list';

import { ComponentsUserModule } from '../components/components.module';
import { LoginComponent } from 'src/app/login/login.component';
import { RegistrationComponent } from 'src/app/registration/registration.component';
import {AdComponent} from '../ad/ad.component';
import {RatingModule} from 'ng-starrating';
import {SafeHtml} from "../../pipes/safeHtml.pipe";
import {SafeHtmlPipeModule} from "../../pipes/safeHtmlPipe.module";
import {YesNoPipe} from "../../pipes/yes-no.pipe";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserLayoutRoutes),
    FormsModule,
    ChartsModule,
    ToastrModule.forRoot(),
    NgbModule,
    ComponentsUserModule,
    ReactiveFormsModule,
    DropdownListModule,
    RatingModule,
    SafeHtmlPipeModule
  ],
  declarations: [
    CarListComponent,
    SearchComponent,
    LoginComponent,
    RegistrationComponent,
    RentRequestComponent,
    AdComponent,
    YesNoPipe
  ],
  bootstrap: [
  ]
})

export class UserLayoutModule { }
