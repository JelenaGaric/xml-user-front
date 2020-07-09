import { Component, OnInit, Input } from '@angular/core';
import {Car} from '../../model/car';
import {StarRatingComponent} from 'ng-starrating';
import {CarService} from '../service/car.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit {
  constructor(private router: Router, private carService: CarService) { }

  @Input() car: Car;

  imageUrl: string;

  ngOnInit(): void {
    this.carService.getImage(this.car.id)
      .subscribe(image => {
        if (image != null){
          this.imageUrl = URL.createObjectURL(image);
          console.log(this.imageUrl);
        }
      });
  }

  openAd() {
    this.router.navigate(['/user/carlist/' + this.car.id]);
  }


  onRate($event: {oldValue: number, newValue: number, starRating: StarRatingComponent}) {
    alert('Only users can change the rating.');
  }
}
