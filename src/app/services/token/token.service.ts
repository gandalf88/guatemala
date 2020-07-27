import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { GET_TOKEN } from 'src/app/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor( public httpService: HttpService ) { }

  public getToken(callbackInterface) {
    this.httpService.post(GET_TOKEN, null,
      callbackInterface.onTokenRetrieve,
        callbackInterface.onTokenErrorRetrieve);
  }

}

export interface TokenInterface {

  onTokenRetrieve(data): any;
  onTokenErrorRetrieve(data): any;

}
