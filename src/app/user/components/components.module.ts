import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterUserComponent } from './footer/footer.component';
import { SidebarUserComponent } from './sidebar/sidebar.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarUserComponent} from './navbar/navbar.component';
import {SafeHtml} from "../../pipes/safeHtml.pipe";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    FooterUserComponent,
    SidebarUserComponent,
    NavbarUserComponent
  ],
  exports: [
    FooterUserComponent,
    SidebarUserComponent,
    NavbarUserComponent
  ]
})
export class ComponentsUserModule {}
