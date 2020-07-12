import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';
import { ToastrModule } from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DropdownListModule } from 'ngx-dropdown-list';

import { ComponentsAdminModule } from '../components/components.module';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { CommentListComponent } from '../comment-list/comment-list.component';
import { UserListComponent } from '../user-list/user-list.component';
import { CompanyListComponent } from '../company-list/company-list.component';
import { CodebookListComponent } from '../codebook-list/codebook-list.component';
import { CodebookUpdateComponent } from '../codebook-update/codebook-update.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    ToastrModule.forRoot(),
    NgbModule,
    ComponentsAdminModule,
    ReactiveFormsModule,
    DropdownListModule
  ],
  declarations: [
    CommentListComponent,
    UserListComponent,
    CompanyListComponent,
    CodebookListComponent,
    CodebookUpdateComponent
  ],
  bootstrap: [
  ]
})

export class AdminLayoutModule { }