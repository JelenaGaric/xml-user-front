import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {CarDTO} from '../add-new-car/dtos/carDTO';
import {CodebookDTOh} from '../add-new-car/dtos/codebookDTOh';
import {catchError} from 'rxjs/operators';
import {Location} from '../../model/location';
import {Car} from '../../model/car';

@Injectable({
  providedIn: 'root'
})
export class AddNewCarService {
  constructor(private httpClient: HttpClient) {
  }

  postNewCar(carDTO: CarDTO): Observable<Car> {
    return this.httpClient.post<Car>('http://localhost:8080/car-service/advertisement', carDTO).pipe(
      catchError(this.handleError));
  }

  getCodebook(): Observable<CodebookDTOh> {
    return this.httpClient.get<CodebookDTOh>('http://localhost:8080/codebook-service/');
  }

  getLocatons(): Observable<Location[]> {
    return this.httpClient.get<Location[]>('http://localhost:8080/codebook-service/location');
  }

  uploadImage(fd: FormData) {
    return this.httpClient.post('http://localhost:8080/car-service/advertisement/image', fd, {
      reportProgress: true,
      observe: 'events'
    });
  }

  handleError(error) {

    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {

      // client-side error
      errorMessage = `Error: ${error.error.message}`;

    } else {

      // server-side error
      if (error.status === 405){
        errorMessage = 'You can post maximum of 3 cars.';
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
    }

    window.alert(errorMessage);

    return throwError(errorMessage);

  }
}
