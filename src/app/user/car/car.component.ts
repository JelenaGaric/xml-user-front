import { Component, OnInit } from '@angular/core';
import {CarService} from '../service/car.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Car} from '../../model/car';
import {RentRequestService} from '../service/rent-request.service';
import {Rent} from '../../model/rentRequest';

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
  startBlockDate: Date;
  endBlockDate: Date;
  canBlockCar: boolean;
  imageUrl: string;
  private loggedInUser: any;

  constructor(private _carService: CarService, private _rentService: RentRequestService, private router: Router,  private route: ActivatedRoute) { }

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
                this.loggedInUser = JSON.parse(localStorage.getItem('loggedIn'));
                this.canBlockCar = this.loggedInUser.id === this.car.ownerId;
                console.log(this.canBlockCar);
              }
            });
        });
    });
  }
  openRatings(){
    this.router.navigate(['ratings'], { relativeTo: this.route });
  }

  addToCart() {
    if (!this.startDate || !this.endDate) {
      alert('You must select the start and end dates.');
      return;
    }
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart) {
      cart = [];
    }
    else {
      for (const request of cart) {
        if (request.carId == this.selectedId) {
          alert('You have already requested this car.');
          return;
        }
      }
    }

    cart.push({
      carId: this.selectedId,
      startDate: this.startDate,
      endDate: this.endDate,
      clientId: this.loggedInUser.id
    });

    localStorage.setItem('cart', JSON.stringify(cart));
    this.router.navigate(['/user/carlist']).then(() => console.log('Added to cart.'));
  }

  blockCar(){
   let startDate = new Date(this.startBlockDate);
   console.log(startDate.toISOString());
   let endDate = new Date(this.endBlockDate);
   const rent = {
     startDate: startDate.toISOString(),
     endDate: endDate.toISOString(),
     carId: this.car.id,
     clientId: this.loggedInUser.id
    };

   this._rentService.blockCar(rent)
      .subscribe( response => {
          alert('You blocked the car for that period.');
      },
        error => alert('Error while blocking a car.')
      );
  }
}
