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

  constructor(private service: RentRequestService, private router: Router) {
  }

  ngOnInit(): void {
    this.service.getAllRequests().subscribe(data => {
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
