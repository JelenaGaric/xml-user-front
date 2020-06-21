import { Routes } from '@angular/router';

import { CommentListComponent } from '../comment-list/comment-list.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'comments', component: CommentListComponent }

];
