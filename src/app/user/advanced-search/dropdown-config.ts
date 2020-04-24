import {Component} from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngbd-dropdown-config',
  templateUrl: './dropdown-config.html',
  providers: [NgbDropdownConfig] // add NgbDropdownConfig to the component providers
})
// tslint:disable-next-line:component-class-suffix
export class NgbdDropdownConfig {

  carModels: any[] = [
    {
      id: 1,
      name : 'M5'
    },
    {
      id: 2,
      name : 'Corolla'
    },
    {
      id: 3,
      name : 'A7'
    }
  ];

  cars: any[] = [
    {
      id : 1,
      name : 'Mercedes'
    },
    {
      id : 2,
      name : 'Toyota'
    },
    {
      id : 3,
      name : 'Audi'
    },
  ];


  carClasses: any[] = [
    {
      id : 1,
      name : 'Gradski auto'
    },
    {
      id : 2,
      name : 'Old tajmer'
    },
    {
      id : 3,
      name : 'SUV'
    },
  ];


  constructor(config: NgbDropdownConfig) {
    // customize default values of dropdowns used by this component tree
    // config.placement = 'top-left';
    config.autoClose = 'outside';
  }
}
