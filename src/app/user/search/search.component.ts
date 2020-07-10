import { Component, OnInit } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import {SearchService} from '../service/search.service';
import {CarBrand} from '../../model/carBrand';
import {FuelType} from '../../model/fuelType';
import {CarClass} from '../../model/carClass';
import {TransmissionType} from '../../model/transmissionType';
import {CarModel} from '../../model/carModel';
import {SearchRequest} from '../../model/searchRequest';
import {Car} from '../../model/car';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})

export class SearchComponent implements OnInit {
  carBrands: CarBrand[];
  carModels: CarModel[];
  carClasses: CarClass[];
  fuelTypes: FuelType[];
  transmissionTypes: TransmissionType[];
  locations = [];

  errorMessage: string;

  waiverChecked: boolean;
  limitedKmsChecked: boolean;
  childSeats = 0;
  kmage = 0;

  searchRequest: SearchRequest = new SearchRequest();
  cars: Car[];

  priceOrder = true;
  rateOrder = true;
  kmsOrder = true;

  startDate: Date;
  endDate: Date;

  constructor(private _searchService: SearchService, config: NgbDropdownConfig) {
    config.autoClose = 'outside';
  }

  ngOnInit(): void {

    this._searchService.getLocations().subscribe(
      locations => {
        this.locations = locations;
      },
      error => this.errorMessage = (error as any)
    );
    this._searchService.getCarBrands().subscribe(
      carBrands => {
        this.carBrands = carBrands;
      },
      error => this.errorMessage = (error as any)
    );

    this._searchService.getFuelTypes().subscribe(
      fuelTypes => {
        this.fuelTypes = fuelTypes;
      },
      error => this.errorMessage = (error as any)
    );

    this._searchService.getCarClasses().subscribe(
        carClasses => {
        this.carClasses = carClasses;
      },
      error => this.errorMessage = (error as any)
    );

    this._searchService.getTransmissionTypes().subscribe(
      transmissionTypes => {
        this.transmissionTypes = transmissionTypes;
      },
      error => this.errorMessage = (error as any)
    );
  }

  getCarModels(id: number){
    this._searchService.getCarModels(id).subscribe(
      carModels => {
        this.carModels = carModels;
        },
      error => this.errorMessage = (error as any)
    );
  }

  selectLocation(id: string){
    this.searchRequest.locationId = id;
  }

  selectCarModel(id: string){
    this.searchRequest.carModelId = id;
  }

  selectCarClass(id: string){
    this.searchRequest.carClassId = id;
    console.log(this.searchRequest);
  }

  selectFuelType(id: string){
    this.searchRequest.fuelTypeId = id;
  }

  selectTransmission(id: string){
    this.searchRequest.transmissionId = id;
  }

  sortByPrice(){
    this.priceOrder = !this.priceOrder;
    if (this.priceOrder) {
      this.cars.sort((a, b) => (a.pricePerDay > b.pricePerDay) ? 1 : -1);
    }
    else {
      this.cars.sort((a, b) => (a.pricePerDay < b.pricePerDay) ? 1 : -1);
    }
  }

  sortByRate(){
    this.rateOrder = !this.rateOrder;
    if (this.rateOrder) {
      this.cars.sort((a, b) => (a.rating > b.rating) ? 1 : -1);
    }
    else {
      this.cars.sort((a, b) => (a.rating < b.rating) ? 1 : -1);
    }
  }

  sortByKms(){
    this.kmsOrder = !this.kmsOrder;
    if (this.kmsOrder) {
      this.cars.sort((a, b) => (a.kmage > b.kmage) ? 1 : -1);
    }
    else {
      this.cars.sort((a, b) => (a.kmage < b.kmage) ? 1 : -1);
    }
  }

  search(){
    this.searchRequest.availableChildSeats = this.childSeats;
    this.searchRequest.waiver = this.waiverChecked;
    this.searchRequest.limitedKms = this.limitedKmsChecked;
    this.searchRequest.kmage = this.kmage;
    this.searchRequest.startDate = this.startDate;
    this.searchRequest.endDate = this.endDate;
    console.log(this.searchRequest)
    this._searchService.sendSearchRequest(this.searchRequest).subscribe(
      cars => {
       this.cars = cars;
       console.log(cars);
      },
      error => {
        this.errorMessage = (error as any);
        alert('Error. Try setting start date in 2 days.');
      }
    );
  }
}
