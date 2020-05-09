import { Component, OnInit } from '@angular/core';
import {NgbDropdownConfig} from "@ng-bootstrap/ng-bootstrap";
import {SearchService} from "./search.service";
import {CarBrand} from "../../model/carBrand";
import {FuelType} from "../../model/fuelType";
import {CarClass} from "../../model/carClass";
import {TransmissionType} from "../../model/transmissionType";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {
  carBrands : CarBrand[];
  carClasses : CarClass[];
  fuelTypes : FuelType[];
  transmissionTypes : TransmissionType[];
  errorMessage : string;

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


  constructor(private _searchService : SearchService, config: NgbDropdownConfig) {
    config.autoClose = 'outside';
  }

  ngOnInit(): void {

    this._searchService.getCarBrands().subscribe(
      carBrands => {
        this.carBrands = carBrands;
        console.log(this.carBrands);
      },
      error => this.errorMessage = <any>error
    );

    this._searchService.getFuelTypes().subscribe(
      fuelTypes => {
        this.fuelTypes = fuelTypes;
      },
      error => this.errorMessage = <any>error
    );

    this._searchService.getCarClasses().subscribe(
        carClasses => {
        this.carClasses = carClasses;
        console.log(this.carClasses);
      },
      error => this.errorMessage = <any>error
    );

    this._searchService.getTransmissionTypes().subscribe(
      transmissionTypes => {
        this.transmissionTypes = transmissionTypes;
        console.log(this.transmissionTypes);
      },
      error => this.errorMessage = <any>error
    );
  }

}
