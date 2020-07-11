import {Component, OnInit} from '@angular/core';
import {Rent} from '../../model/rentRequest';
import {RentRequestService} from '../service/rent-request.service';
import {Router} from '@angular/router';
import {User} from '../../model/user';

@Component({
  selector: 'app-cancel-req',
  templateUrl: './cancel-req.component.html'
})

export class CancelReqComponent implements OnInit {
  requests: Rent[] = [];
  loggedInUser: any;

  constructor(private service: RentRequestService, private router: Router) {
  }

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(localStorage.getItem('loggedIn'));
    if (this.loggedInUser === null || this.loggedInUser === undefined) {
      alert('You need to log in for this feature.');
      this.router.navigate(['user']);
    }
    this.service.getClientRequests(this.loggedInUser.id).subscribe(data => {
      this.requests = data;

    });
  }

  cancelRentRequest(id: string) {
    this.service.cancelRequest(id).subscribe(data => {
      alert('Successfully deleted!');
      window.location.reload();
    });
  }


}
