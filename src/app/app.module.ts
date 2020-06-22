import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ComponentsModule } from './user/components/components.module';
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
import {CarService} from "./user/service/car.service";
import { CarComponent } from './user/car/car.component';
import { RatingsComponent } from './user/ratings/ratings.component';
import { RatingModule } from 'ng-starrating';
import { MessagesComponent } from './user/messages/messages.component';
import {MessageService} from "./user/service/message.service";


@NgModule({
  declarations: [
    AppComponent,
    UserLayoutComponent,
    CarComponent,
    RatingsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,

    NgbModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RatingModule
  ],
  providers: [CarService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
