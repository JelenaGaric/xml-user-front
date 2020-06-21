import { Component, OnInit } from '@angular/core';
import {CarModel} from '../../model/carModel';
import {CarClass} from '../../model/carClass';
import {Car} from '../../model/car';
import {TransmissionType} from '../../model/transmissionType';
import {CarBrand} from '../../model/carBrand';
import {Router} from '@angular/router';
import {FuelType} from '../../model/fuelType';
import {AddNewCarService} from './add-new-car.service';

@Component({
  selector: 'app-add-new-car',
  templateUrl: './add-new-car.component.html',
  styleUrls: ['./add-new-car.component.css']
})
export class AddNewCarComponent implements OnInit {

  car: Car;

  constructor(private addNewCarService: AddNewCarService) {
    this.car = new Car();
  }

  ngOnInit() { }

  onSubmit() {
    console.log(this.car);
    this.addNewCarService.postNewCar(this.car).subscribe(car => {
      console.log('povratna vrednost');
      console.log(car);
      alert('Successfully added a new car.');
    })
  }
}
