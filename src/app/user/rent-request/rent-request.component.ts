import {Component, OnInit} from '@angular/core';
import {Rent} from '../../model/rentRequest';
import {RentRequestService} from '../service/rent-request.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rent-request',
  templateUrl: './rent-request.component.html',
  styleUrls: ['./rent-request.component.css']
})
export class RentRequestComponent implements OnInit {
  requests: Rent[] = [];
  deletionId: number;
  loggedInUser: any;

  constructor(private service: RentRequestService, private router: Router) {
  }

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(localStorage.getItem('loggedIn'));
    if (this.loggedInUser === null || this.loggedInUser === undefined) {
      alert('You need to log in for this feature.');
      this.router.navigate(['user']);
    }

    this.service.getAllRequests(this.loggedInUser.id.toString()).subscribe(data => {
      this.requests = data;
    });
  }
  cancelRentRequest(id: string) {
    this.service.cancelRequest(id).subscribe(data => {
      alert('Successfully deleted!');
      window.location.reload();
    });
  }

    approveRentRequest(id: string){
    console.log(id);
    this.service.approveRequest(id).subscribe(data => {
        alert('Successfully approved!');
        window.location.reload();
      });
    }

}
