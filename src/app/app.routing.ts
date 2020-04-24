import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {UserLayoutComponent} from './user/user-layout/user-layout.component';
import { AdvancedSearchComponent } from './user/advanced-search/advanced-search.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {
    path: '',
    // redirectTo: '',
    component: UserLayoutComponent,
    // pathMatch: 'full',
    // children: [
    //  {
    //  path: '',
    //  loadChildren: './user/user-layout/user-layout.module#UserLayoutModule'
    // }]
  },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent }
  
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
