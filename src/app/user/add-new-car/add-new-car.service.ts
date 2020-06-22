import {Injectable} from '@angular/core';
import {CarModel} from '../../model/carModel';
import {CarClass} from '../../model/carClass';
import {Car} from '../../model/car';
import {HttpClient} from '@angular/common/http';
import {CarBrand} from '../../model/carBrand';
import {Router} from '@angular/router';
import {FuelType} from '../../model/fuelType';
import {Observable} from 'rxjs';
import {TransmissionType} from '../../model/transmissionType';

@Injectable({
  providedIn: 'root'
})
export class AddNewCarService {
  constructor(private httpClient: HttpClient, private router: Router) {
  }

  postNewCar(car: Car): Observable<Car> {
    return this.httpClient.post<Car>('http://localhost:8080/car-service/car', car);
  }

}
