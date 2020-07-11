import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { CarRating } from 'src/app/model/carRating';
import { ConfigService } from '../config.service';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarRatingService {
  userId:string;

  constructor(private http: HttpClient, private configService: ConfigService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAllCarRatings(carId: string): Observable<CarRating[]> {

    const headers = new HttpHeaders()
      .set('carId', carId);

    return this.http.get<CarRating[]>(this.configService.carRatingsUrl, {headers: headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  manageComment(rating: CarRating): Observable<any>{
    const loggedInUser = JSON.parse(localStorage.getItem('loggedIn'))
    this.userId = loggedInUser.id;

    return this.http.put<any>(this.configService.carRatingsUrl, rating,
      {
        headers: new HttpHeaders().set('authentication', '${loggedInUser.id}'),
      }
    );
  }


  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return throwError(err.message);
  }

}
