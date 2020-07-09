import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ComponentsUserModule } from './user/components/components.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import { AppComponent } from './app.component';

import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import {UserLayoutComponent} from './user/user-layout/user-layout.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CarService} from './user/service/car.service';
import {RentRequestService} from './user/service/rent-request.service';
import { CarComponent } from './user/car/car.component';
import { RatingsComponent } from './user/ratings/ratings.component';
import { MessagesComponent } from './user/messages/messages.component';
import {MessageService} from './user/service/message.service';
import { AddNewCarComponent } from './user/add-new-car/add-new-car.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { ComponentsAdminModule } from './admin/components/components.module';
import {SafeHtml} from "./pipes/safeHtml.pipe";
import {SafeHtmlPipeModule} from "./pipes/safeHtmlPipe.module";

@NgModule({
  declarations: [
    AppComponent,
    UserLayoutComponent,
    CarComponent,
    RatingsComponent,
    MessagesComponent,
    RatingsComponent,
    AddNewCarComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ComponentsUserModule,
    ComponentsAdminModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    SafeHtmlPipeModule
  ],
  providers: [CarService, MessageService, RentRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
