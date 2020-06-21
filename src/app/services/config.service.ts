import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  // tslint:disable-next-line:variable-name
  private _api_url = 'http://localhost:8081/rating';


  get carRatingsUrl(): string {
    return this._api_url;
  }
  
}
