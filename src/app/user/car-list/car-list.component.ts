import { Component, OnInit } from '@angular/core';
import {CarService} from '../service/car.service';
import {Car} from '../../model/car';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  carList: Car[];

  constructor(private _carService: CarService, private router: Router,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.carList = [];

    this._carService.getCars()
      .subscribe( data => {
        console.log(data);
        for (const car of data) {
          this.carList.push(car);
        }
      });
  }

  openAd(carId: string) {
    this.router.navigate([carId], { relativeTo: this.route });  }
}
