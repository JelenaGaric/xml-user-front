import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/admin/comments', title: 'Comment list',  icon: 'chat', class: '' },
    { path: '/admin/userlist', title: 'User list', icon: 'list', class: '' },
    { path: '/admin/companylist', title: 'Company list', icon: 'store', class: ''},
    { path: '/admin/codebooklist', title: 'Codebook list', icon: 'local_library', class: ''}
];

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarAdminComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  }
}
