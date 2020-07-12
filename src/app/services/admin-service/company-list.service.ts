import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ConfigService } from '../config.service';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Agent } from 'src/app/model/agent';

@Injectable({
    providedIn: 'root'
  })
export class CompanyListService {
    userId:string;

    constructor(private http: HttpClient, private configService: ConfigService) { }
  
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    getAllAgents(): Observable<Agent[]> {

        return this.http.get<Agent[]>(this.configService.userListUrl + '/' + 'findAllAgents' )
            .pipe(
                catchError(this.handleError)
            );
    }

    block(agent) {

        return this.http.post(this.configService.userListUrl + '/' + 'blockAgent', agent )
            .pipe(
                catchError(this.handleError)
            );
    } 
    
    unblock(agent) {

        return this.http.post(this.configService.userListUrl + '/' + 'activateUser', agent )
            .pipe(
                catchError(this.handleError)
            );
    } 

    delete(agent) {

        const options = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
            }),
            body: agent,
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