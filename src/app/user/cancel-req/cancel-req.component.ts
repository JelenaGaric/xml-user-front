import {Component, OnInit} from '@angular/core';
import {Rent} from '../../model/rentRequest';
import {RentRequestService} from '../service/rent-request.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../model/user';
import {Message} from '../../model/message';
import {MessageService} from '../service/message.service';

@Component({
  selector: 'app-cancel-req',
  templateUrl: './cancel-req.component.html'
})

export class CancelReqComponent implements OnInit {
  requests: Rent[] = [];
  loggedInUser: any;
  inputValue: string;

  constructor(private service: RentRequestService, private messageService: MessageService, private router: Router,  private route: ActivatedRoute) {
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
    for (const rent of this.requests){
      if (rent.id == id){
        if (rent.status == 'PAID'){
          alert('You cannot reject a paid request!');
          return;
        }
      }
    }

    this.service.cancelRequest(id).subscribe(data => {
      alert('Successfully deleted!');
      window.location.reload();
    });
  }

  onKey(event) {this.inputValue = event.target.value; }

  sendMessage(receiverId: string){

    const message: Message = new Message();
    this.messageService.getUser(receiverId).subscribe( user => {
      message.receiver = user.username;
      message.content = this.inputValue;

      this.messageService.sendMessage(this.loggedInUser.id.toString(), message)
        .subscribe( data => {
          alert('Message sent!');
        }, error => {
          alert('You haven\'t got any rent requests with that user, so you can\'t share messages with each other.');
        });
    });

  }
  openAd(carId: string) {
    this.router.navigate(['/user/carlist/' + carId]);
  }
}
