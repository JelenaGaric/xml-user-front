import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterAdminComponent } from './footer/footer.component';
import { SidebarAdminComponent } from './sidebar/sidebar.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarAdminComponent} from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    FooterAdminComponent,
    SidebarAdminComponent,
    NavbarAdminComponent
  ],
  exports: [
    FooterAdminComponent,
    SidebarAdminComponent,
    NavbarAdminComponent
  ]
})
export class ComponentsAdminModule {}
