import { Component, OnInit } from '@angular/core';
import {MessageService} from '../service/message.service';
import {Message} from '../../model/message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messageList: Message[];
  userId: string;
  username: string;
  inputValue: string;

  constructor(private _messageService: MessageService) { }

  ngOnInit(): void {
    this.messageList = [];
    // ovo ce se kupiti iz local storagea
    this.userId = '1';
    this.username = 'guest1';
    this._messageService.getMessages(this.userId)
      .subscribe( data => {
        console.log(data);
        for (const message of data) {
          if (message.receiver === 'guest1') {
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

    this._messageService.sendMessage(this.userId, message)
      .subscribe( data => {
          data.flag = 'Sent';
          this.messageList.push(data);
      }, error => {
        alert('You haven\'t got any rent requests with that user, so you can\'t share messages with each other.');
      });
  }

}
