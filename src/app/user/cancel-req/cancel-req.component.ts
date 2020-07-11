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
  loggedIn: User;
  userId: string;


  constructor(private service: RentRequestService, private router: Router) {
  }

  ngOnInit(): void {
    this.userId = '1';
    this.service.getClientRequests(this.userId).subscribe(data => {
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
