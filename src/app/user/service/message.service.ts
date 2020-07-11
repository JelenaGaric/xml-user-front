import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {  catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import {Message} from '../../model/message';
import {User} from "../../model/user";

@Injectable()
export class MessageService {

  private _messagesUrl = 'http://localhost:8085/messages';
  private _usersUrl = 'http://localhost:8085/user';

  constructor(private _http: HttpClient) { }

  getMessages(receiverId): Observable<Message[]> {
    const headers = new HttpHeaders().set('receiverId', receiverId.toString());

    return this._http.get<Message[]>(this._messagesUrl, { headers}).pipe(
      catchError(this.handleError));
  }
  getUser(id): Observable<User> {
    return this._http.get<User>(this._usersUrl + '/' + id).pipe(
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
