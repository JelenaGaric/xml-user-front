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
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { ComponentsAdminModule } from './admin/components/components.module';


@NgModule({
  declarations: [
    AppComponent,
    UserLayoutComponent,
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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
