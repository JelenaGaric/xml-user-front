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
      return this.http.get<CarRating[]>(this.configService.carRatingsUrl, 
        {headers: {carId}})
        .pipe(
          catchError(this.errorHandle)
        );
    }

    manageComment(rating: CarRating){
        return this.http.put(this.configService.carRatingsUrl, rating)
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