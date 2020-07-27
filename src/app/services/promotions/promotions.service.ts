import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { PROMOTIONS, PROMOTIONS_SEARCH } from 'src/app/constants/constants';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PromotionsService {

  constructor( public httpService: HttpService, public http: HttpClient ) { }

  public promotionsPaginate(callbackInterface, value='') {

        this.http.get(PROMOTIONS+value,  {responseType: 'json'} ).subscribe(
          (response: any) => {
            callbackInterface.onPromotionsRetrieve(response);
          },
          (error: any) => {
            callbackInterface.onPromotionsErrorRetrieve(error);
          }
        );
  }

  public promotionsDetails(callbackInterface, id) {

      this.http.get(PROMOTIONS_SEARCH + id.toString(),  {responseType: 'json'} ).subscribe(
        (response: any) => {
          callbackInterface.onPromotionsDetailsRetrieve(response);
        },
        (error: any) => {
          callbackInterface.onPromotionsDetailsErrorRetrieve(error);
        }
      );

  }

}

export interface PromotionsInterface {

  onPromotionsRetrieve(data): any;
  onPromotionsDetailsRetrieve(data): any;
  onPromotionsErrorRetrieve(data): any;
  onPromotionsDetailsErrorRetrieve(data): any;

}