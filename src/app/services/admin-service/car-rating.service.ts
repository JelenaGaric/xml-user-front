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

    getAllCarRatings(): Observable<CarRating[]> {
      return this.http.get<CarRating[]>(this.configService.get_all_Car_Ratings)
        .pipe(
          catchError(this.errorHandl)
        );
    }

    errorHandl(error) {
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