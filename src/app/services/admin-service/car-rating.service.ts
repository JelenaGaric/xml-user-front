import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CarRating } from 'src/app/model/carRating';
import { ConfigService } from '../config.service';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class CarRatingService {
    
    constructor(private http: HttpClient, private configService: ConfigService) { }
  
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    getAllCarRatings(carId: string): Observable<CarRating[]> {

      const headers = new HttpHeaders()
      .set('carId', carId);

      return this.http.get<CarRating[]>(this.configService.carRatingsUrl, {headers:headers})
        .pipe(
          catchError(this.errorHandle)
        );
    }

    manageComment(rating: CarRating){
      const loggedInUser = JSON.parse(localStorage.getItem('loggedIn'))
      const headers = new HttpHeaders()
      .set('Authorization', loggedInUser.id);
        return this.http.put(this.configService.carRatingsUrl, rating, {headers:headers})
            .pipe(
              catchError(this.errorHandle)
            );
    }


    reject(id: string){
        
    }
    errorHandle(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // Get client-side error
          errorMessage = error.error.message;
        } else {
          // Get server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
      }
      
}