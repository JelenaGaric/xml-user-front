import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {UserLayoutComponent} from './user/user-layout/user-layout.component';
import { AdvancedSearchComponent } from './user/advanced-search/advanced-search.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserLayoutModule } from './user/user-layout/user-layout.module';

const routes: Routes = [
  {path: 'user',
  component: UserLayoutComponent,
  children: [
    {
      path: '',
      loadChildren: () => UserLayoutModule
    }]},
  { path: 'register', component: RegistrationComponent },
  //{ path: 'login', component: LoginComponent }
  
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
