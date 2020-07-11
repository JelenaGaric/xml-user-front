import { Component, OnInit } from '@angular/core';
import {MessageService} from '../service/message.service';
import {Message} from '../../model/message';
import {AddNewCarService} from "../service/add-new-car.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messageList: Message[];

  inputValue: string;
  loggedInUser: any;

  constructor(private _messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
    this.messageList = [];
    this.loggedInUser = JSON.parse(localStorage.getItem('loggedIn'));
    if (this.loggedInUser === null || this.loggedInUser === undefined) {
      alert('You need to log in for this feature.');
      this.router.navigate(['user']);
    }
    this._messageService.getMessages(this.loggedInUser.id)
      .subscribe( data => {
        for (const message of data) {
          if (message.receiver === this.loggedInUser.username) {
            message.flag = 'Received';
          }
          else {
            message.flag = 'Sent';
          }
          this.messageList.push(message);
        }
      });
  }
  onKey(event) {this.inputValue = event.target.value; }

  reply(receiver: string){
    const message: Message = new Message();
    message.receiver = receiver;
    message.content = this.inputValue;

    this._messageService.sendMessage(this.loggedInUser.id.toString(), message)
      .subscribe( data => {
          data.flag = 'Sent';
          this.messageList.push(data);
      }, error => {
        alert('You haven\'t got any rent requests with that user, so you can\'t share messages with each other.');
      });
  }

}
