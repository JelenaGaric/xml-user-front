import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ConfigService } from '../config.service';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from 'src/app/model/user';

@Injectable({
    providedIn: 'root'
  })
export class UserListService {
    userId:string;

    constructor(private http: HttpClient, private configService: ConfigService) { }
  
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    getAllUsers(): Observable<User[]> {

        return this.http.get<User[]>(this.configService.userListUrl)
            .pipe(
                catchError(this.handleError)
            );
    }

    block(user) {

        return this.http.post(this.configService.userListUrl + '/' + 'blockUser', user )
            .pipe(
                catchError(this.handleError)
            );
    } 
    
    unblock(user) {

        return this.http.post(this.configService.userListUrl + '/' + 'activateUser', user )
            .pipe(
                catchError(this.handleError)
            );
    } 

    delete(user) {

        const options = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
            }),
            body: user,
          };

        return this.http.delete(this.configService.userListUrl, options )
            .pipe(
                catchError(this.handleError)
            );
    }
    
    /*
    manageComment(rating: CarRating): Observable<any>{
      const loggedInUser = JSON.parse(localStorage.getItem('loggedIn'))
      this.userId = loggedInUser.id;

      return this.http.put<any>(this.configService.carRatingsUrl, rating,
        {
          headers: new HttpHeaders().set('authentication', `${loggedInUser.id}`),
        }
        );
    }
    */

    private handleError(err: HttpErrorResponse) {
      console.log(err.message);
      return throwError(err.message);
    }
      
}