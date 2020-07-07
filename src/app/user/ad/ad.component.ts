import { Component, OnInit, Input } from '@angular/core';
import {Car} from '../../model/car';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() car: Car;

  ngOnInit(): void {
    console.log('car ' + this.car);
  }

  openAd() {
    this.router.navigate(['/user/carlist/' + this.car.id]);  }
}
