import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import {Car} from '../../model/car';
import {Rating} from '../../model/rating';

@Injectable()
export class CarService {

  private _carUrl = 'http://localhost:8081/car';
  private _ratingUrl = 'http://localhost:8081/rating';

  constructor(private _http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this._http.get<Car[]>(this._carUrl).pipe(
      catchError(this.handleError));
  }
  getCar(id: string): Observable<Car> {
    return this._http.get<Car>(this._carUrl + '/' + id).pipe(
      catchError(this.handleError));
  }

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

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return throwError(err.message);
  }

}
