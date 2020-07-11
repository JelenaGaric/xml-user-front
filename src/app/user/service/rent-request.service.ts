import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Rent} from '../../model/rentRequest';
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RentRequestService {

  constructor(private httpClient: HttpClient) {
  }

  getAllRequests() {
    return this.httpClient.get<Rent[]>('http://localhost:8080/rent-service/all');
  }

  getClientRequests(id: string) {
    return this.httpClient.get<Rent[]>('http://localhost:8080/rent-service/client' + '/' + id);
  }

  cancelRequest(id: string) {
    return this.httpClient.delete('http://localhost:8080/rent-service/' + id);
  }

  approveRequest(id: string) {
    return this.httpClient.put('http://localhost:8080/rent-service/' + id, null);
  }

  blockCar(rent: any) {
    return this.httpClient.post('http://localhost:8080/rent-service/notAvailable', rent);
  }
}
