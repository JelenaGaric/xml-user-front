import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';

import { CarRating } from 'src/app/model/carRating';
import { CarRatingService } from 'src/app/services/admin-service/car-rating.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  constructor(private carRatingService: CarRatingService,
    private router: Router, private modalService: NgbModal,
    private formBuilder: FormBuilder ) {

  }

  carRatings: CarRating[] = [];

  ngOnInit(): void {
    this.getAllCarRatings();

  }

  getAllCarRatings() {
    this.carRatingService.getAllCarRatings('0')
      .subscribe(data => {
        this.carRatings = data;
      });
  }

  approve(rating: CarRating){
    rating.ratingStatus = 'APPROVED';
    this.carRatingService.manageComment(rating)
      .subscribe( response => {
        console.log(response);
      });
  }

  reject(rating: CarRating){
    rating.ratingStatus = 'DENIED';
    this.carRatingService.manageComment(rating)
      .subscribe( response => {
        console.log(response);
      });
  }

}
