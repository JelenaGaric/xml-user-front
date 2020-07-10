import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {CarBrand} from '../../model/carBrand';
import {catchError} from 'rxjs/operators';
import {FuelType} from '../../model/fuelType';
import {CarClass} from '../../model/carClass';
import {TransmissionType} from '../../model/transmissionType';
import {CarModel} from '../../model/carModel';
import {SearchRequest} from '../../model/searchRequest';
import {Car} from '../../model/car';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    // 'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class SearchService{
  // private _carSearchUrl = 'http://localhost:8081/search';
  private _carBrandsUrl = 'http://localhost:8082/carBrand';
  private _carModelsUrl = 'http://localhost:8082/carModel';
  private _carClassesUrl = 'http://localhost:8082/carClass';
  private _fuelTypesUrl = 'http://localhost:8082/fuelType';
  private _transmissionTypesUrl = 'http://localhost:8082/transmission';
  private _locationsUrl = 'http://localhost:8082/location';

  private _searchUrl = 'http://localhost:8081/car/search';

  constructor(private _http: HttpClient){ }

  getLocations(): Observable<any[]>{
    return this._http.get<any[]>(this._locationsUrl).pipe(
      catchError(this.handleError));
  }

  getCarBrands(): Observable<CarBrand[]>{
    return this._http.get<CarBrand[]>(this._carBrandsUrl).pipe(
      catchError(this.handleError));
  }

  getCarModels(id: number): Observable<CarModel[]>{
    return this._http.get<CarModel[]>(this._carModelsUrl + '/carBrand/' + id).pipe(
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

  sendSearchRequest(searchRequest: SearchRequest): Observable<Car[]>{
    return this._http.post<Car[]>(this._searchUrl, searchRequest, httpOptions).pipe(
      catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
