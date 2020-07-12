import { Component, OnInit } from '@angular/core';
import {CarService} from '../service/car.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Car} from '../../model/car';
import {RentRequestService} from '../service/rent-request.service';
import {Rent} from '../../model/rentRequest';
import {Message} from "../../model/message";
import {MessageService} from "../service/message.service";

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
  inputValue: string;


  startBlockDate: Date;
  endBlockDate: Date;
  canBlockCar: boolean;
  imageUrl: string;
  private loggedInUser: any;

  constructor(private _carService: CarService, private _rentService: RentRequestService, private _messageService: MessageService, private router: Router,  private route: ActivatedRoute) { }

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
      waiver: this.waiver,
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

  onKey(event) {this.inputValue = event.target.value; }

  sendMessage(receiverId: string) {

    const message: Message = new Message();
    this._messageService.getUser(receiverId).subscribe(user => {
      message.receiver = user.username;
      message.content = this.inputValue;

      this._messageService.sendMessage(this.loggedInUser.id.toString(), message)
        .subscribe(data => {
          alert('Message sent!');
        }, error => {
          alert('You haven\'t got any rent requests with that user, so you can\'t share messages with each other.');
        });
    });
  }
}
