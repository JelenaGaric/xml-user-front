import { Component, OnInit } from '@angular/core';
import {CarService} from '../service/car.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Car} from '../../model/car';

@Component({
  selector: 'app-car-component',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car: Car = new Car();

  selectedId: string;
  startDate: Date;
  endDate: Date;
  waiver: boolean = false;

  imageUrl: string;

  constructor(private _carService: CarService, private router: Router,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.selectedId = params.id;
      this._carService.getCar(this.selectedId)
        .subscribe( car => {
          this.car = car;
          this._carService.getImage(this.car.id)
            .subscribe(image => {
              if (image != null){
                this.imageUrl = URL.createObjectURL(image);
                console.log(this.imageUrl);
              }
            });
        });
    });
  }
  openRatings(){
    this.router.navigate(['ratings'], { relativeTo: this.route })
  }

  addToCart() {
    if (!this.startDate || !this.endDate) {
      alert('You must select the start and end dates.');
      return;
    }
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart)
      cart = [];
    else
      for (const request of cart)
        if (request.carId == this.selectedId) {
          alert('You have already requested this car.');
          return;
        }

    cart.push({
      carId: this.selectedId,
      startDate: this.startDate,
      endDate: this.endDate,
      waiver: this.waiver,
      clientId: '1'
    });

    localStorage.setItem('cart', JSON.stringify(cart));
    this.router.navigate(['/user/carlist']).then(() => console.log("Added to cart."));
  }
}
