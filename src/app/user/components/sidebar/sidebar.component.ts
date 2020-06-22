import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/user/carlist', title: 'Car List',  icon: 'library_books', class: '' },
    { path: '/user/search', title: 'Search',  icon: 'content_paste', class: '' },
    { path: '/user/addNewCar', title: 'Add New Car',  icon: 'add', class: '' },
    { path: '/user/login', title: 'Login',  icon: 'person', class: '' },
    { path: '/user/messages', title: 'Messages',  icon: 'message', class: '' },
    { path: '/user/register', title: 'Register',  icon: 'bubble_chart', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
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
