import { Component, OnInit } from '@angular/core';
import {CarService} from '../service/car.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Rating} from '../../model/rating';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {
  selectedId: string;
  rate: number;
  ratingList: Rating[];
  newRating: Rating = new Rating();

  constructor(private _carService: CarService, private router: Router,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.newRating.comment = '';
    this.newRating.rating = 0.0;
    this.ratingList = [];
    this.route.params.subscribe((params) => {
      this.selectedId = params.id;
      this._carService.getRatings(this.selectedId)
        .subscribe(data => {
          console.log(data);
          for (const rating of data) {
            this.ratingList.push(rating);
          }
        });
      this._carService.getRate(this.selectedId)
        .subscribe(data => {
          console.log(data);
          this.rate = data;
        });
    });
  }

  onKey(event) {this.newRating.comment = event.target.value; }

  onKeyNum(event) {this.newRating.rating = event.target.value; }

  postRating(){
    if (this.newRating.comment === ''){
      alert('You cannot post an empty comment!');
      return;
    }
    this.newRating.userId = '1';
    this.newRating.carId = this.selectedId;
    this._carService.postRating(this.selectedId, this.newRating)
      .subscribe(data => {
        console.log(data);
        this.ratingList.push(this.newRating);
        this._carService.getRate(this.selectedId)
          .subscribe(rate => {
            this.rate = rate;
          });
      });
  }

}
