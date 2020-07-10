import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable()
export class LoginRegService {

  private _userUrl = 'http://localhost:8085/user';

  constructor(private _http: HttpClient) { }
  /*
  getCars(): Observable<Car[]> {
    return this._http.get<Car[]>(this._carUrl).pipe(
      catchError(this.handleError));
  }
  */
  getUser(user): Observable<User> {
    return this._http.post<User>(this._userUrl + '/login', user).pipe(
      catchError(this.handleError));
  }
  /*
  getRatings(carId: string): Observable<Rating[]> {
    return this._http.get<Rating[]>(this._ratingUrl, {headers: {carId}}).pipe(
      catchError(this.handleError));
  }

  getRate(carId: string): Observable<any> {
    return this._http.get<any>(this._ratingUrl + '/rate', {headers: {carId}}).pipe(
      catchError(this.handleError));
  }

  postRating(carId: string, rating:Rating): Observable<Rating> {
    return this._http.post<Rating>(this._ratingUrl, rating, {headers: {carId}}).pipe(
      catchError(this.handleError));
  }
  */
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return throwError(err.message);
  }
  
}
