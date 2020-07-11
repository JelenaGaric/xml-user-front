import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {CarDTO} from './dtos/carDTO';
import {CodebookDTOh} from './dtos/codebookDTOh';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddNewCarService {
  constructor(private httpClient: HttpClient) {
  }

  postNewCar(carDTO: CarDTO):Observable<CarDTO> {
    return this.httpClient.post<CarDTO>('http://localhost:8080/car-service/car', carDTO);
  }

  getCodebook():Observable<CodebookDTOh> {
    return this.httpClient.get<CodebookDTOh>('http://localhost:8080/codebook-service/');
  }
}
