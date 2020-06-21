import { Component, OnInit } from '@angular/core';
import {CarService} from "../service/car.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Car} from "../../model/car";

@Component({
  selector: 'app-car-component',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car: Car = new Car();
  selectedId: string;

  constructor(private _carService: CarService, private router: Router,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.selectedId = params.id;
      this._carService.getCar(this.selectedId)
        .subscribe( car => {
          this.car = car;
        });
    });
  }
  openRatings(){
    this.router.navigate(['ratings'], { relativeTo: this.route });  }

}
