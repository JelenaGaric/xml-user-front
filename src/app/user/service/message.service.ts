import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import {Message} from "../../model/message";

@Injectable()
export class MessageService {

  private _messagesUrl = 'http://localhost:8085/messages';

  constructor(private _http: HttpClient) { }

  getMessages(receiverId): Observable<Message[]> {
    return this._http.get<Message[]>(this._messagesUrl, {headers: {receiverId}}).pipe(
      catchError(this.handleError));
  }

  sendMessage(senderId, message): Observable<Message> {
    return this._http.post<Message>(this._messagesUrl, message, {headers: {senderId}}).pipe(
      catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return throwError(err.message);
  }

}
