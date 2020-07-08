import { Component, OnInit } from '@angular/core';
import {CartService} from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart;
  cars;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = [];
    this.cars = [];
    this.cart = JSON.parse(localStorage.getItem('cart'));
    if (!this.cart) {
      this.cart = [];
      this.cars = [];
    } else {
      this.cartService.getCars(this.cart).subscribe(response => {
          if (response)
            this.cars = response;
          else
            this.cars = [];
      });
      // console.log(this.cars);
    }
  }

  removeFromCart(id) {
    let index = 0;
    for (let i = 0; i < this.cars.length; ++i)
      if (this.cart[i]['carId'] == id) {
        index = i;
        break;
      }

    this.cart.splice(index, 1);
    this.cars.splice(index, 1);

    // this.cart = this.cart.filter(item => item['carId'] != id);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  clearCart() {
    this.cart = [];
    this.cars = [];
    localStorage.removeItem('cart');
  }

  prepareCart() {
    let prepared = []
    for (let item of this.cart) {
      let prepItem = Object.assign({}, item)
      prepItem['startDate'] = new Date(prepItem['startDate']).toISOString();
      prepItem['endDate'] = new Date(prepItem['endDate']).toISOString();
      prepared.push(prepItem);
    }

    // console.log(prepared);
    return prepared;
  }

  postSeparately() {
    if (!this.cart || !this.cart.length) {
      alert('Cannot send empty request.');
      return;
    }

    this.cartService.postSeparately(this.prepareCart()).subscribe(response => {
      console.log(response);
      alert('Requests successfully sent.');
      this.clearCart();
    }, error => {
      alert(error);
    });
  }

  postBundle() {
    if (!this.cart || !this.cart.length) {
      alert('Cannot send empty request.');
      return;
    }

    this.cartService.postBundle(this.prepareCart()).subscribe(response => {
      console.log(response);
      alert('Bundle successfully sent.');
      this.clearCart();
    }, error => {
      alert('Cannot bundle requests from different owners.');
      console.log(error);
    });
  }
}
