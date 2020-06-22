import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {CarBrand} from '../../model/carBrand';
import {catchError} from 'rxjs/operators';
import {FuelType} from '../../model/fuelType';
import {CarClass} from '../../model/carClass';
import {TransmissionType} from '../../model/transmissionType';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    //'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class SearchService{
  //private _carSearchUrl = 'http://localhost:8081/search';
  private _carBrandsUrl = 'http://localhost:8081/carBrands';
  private _fuelTypesUrl = 'http://localhost:8081/fuelTypes';
  private _transmissionTypesUrl = 'http://localhost:8080/transmissionTypes';
  private _carClassesUrl = 'http://localhost:8081/carClasses';

  carClasses: any[] = [
    {
      id : 1,
      name : 'Gradski auto'
    },
    {
      id : 2,
      name : 'Old tajmer'
    },
    {
      id : 3,
      name : 'SUV'
    },
  ];

  transmissionTypes: any[] = [
    {
      id: 1,
      name: 'Manuelni'
    },
    {
      id: 2,
      name: 'Automatski'
    },
    {
      id: 3,
      name: 'Poluautomatski'
    }
  ];

  constructor(private _http: HttpClient){ }

  /*getFuelTypes(type : String) : Observable<String[]>{
    return this._http.post<String[]>(this._bookSearchUrl, book, httpOptions).pipe(
      catchError(this.handleError));
  }*/

  getCarBrands(): Observable<CarBrand[]>{
    return this._http.get<CarBrand[]>(this._carBrandsUrl).pipe(
      catchError(this.handleError));
  }

  getCarClasses(): Observable<CarClass[]>{
    return this._http.get<CarClass[]>(this._carClassesUrl).pipe(
      catchError(this.handleError));
  }

  getFuelTypes(): Observable<FuelType[]>{
    return this._http.get<FuelType[]>(this._fuelTypesUrl).pipe(
      catchError(this.handleError));
  }

  getTransmissionTypes(): Observable<TransmissionType[]>{
    return this._http.get<TransmissionType[]>(this._transmissionTypesUrl).pipe(
      catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
