import { Routes } from '@angular/router';

import { CommentListComponent } from '../comment-list/comment-list.component';
import { UserListComponent } from '../user-list/user-list.component';
import { CompanyListComponent } from '../company-list/company-list.component';
import { CodebookListComponent } from '../codebook-list/codebook-list.component';
import { CodebookUpdateComponent } from '../codebook-update/codebook-update.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'comments', component: CommentListComponent },
  { path: 'userlist', component: UserListComponent },
  { path: 'companylist', component: CompanyListComponent },
  { path: 'codebooklist', component: CodebookListComponent },
  { path: 'codebookupdate', component: CodebookUpdateComponent }
];
