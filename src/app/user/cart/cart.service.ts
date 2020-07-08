import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {CarDTO} from '../add-new-car/dtos/carDTO';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient) { }

  postSeparately(cart) {
    if (!cart)
      return;

    return this.httpClient.post('http://localhost:8080/rent-service/rents', cart)
      .pipe(catchError(this.handleError));
  }

  postBundle(cart) {
    if (!cart)
      return;

    return this.httpClient.post('http://localhost:8080/rent-service/bundle', cart)
      .pipe(catchError(this.handleError));
  }

  getCars(cart) {
    if (!cart)
      return;

    let ids = "";
    for (let car of cart) {
      ids = ids.concat(car.carId + ",");
    }
    ids = ids.substr(0, ids.length - 1);
    // console.log(ids);

    return this.httpClient.get('http://localhost:8080/car-service/car/pretty',
      { params: new HttpParams().set('ids', ids) }).pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return throwError(err.message);
  }
}
