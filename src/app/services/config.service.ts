import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  // tslint:disable-next-line:variable-name
  private _rent_url = 'http://localhost:8081/rating';
  private _user_url = 'http://localhost:8085/user';

  get carRatingsUrl(): string {
    return this._rent_url;
  }
  
  get userListUrl(): string {
    return this._user_url;
  }

}
