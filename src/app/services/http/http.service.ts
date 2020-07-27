import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }

  public post(url, dataPostObject, successCallback, errorCallback){

    this.http.post(url, dataPostObject).subscribe(
      (response: any) => {
        successCallback(response);
      },
      (error: any) => {
        errorCallback(error);
      }
    );

  }

  public get(url, type, successCallback, errorCallback){

    this.http.get(url, type ).subscribe(
      (response: any) => {
        successCallback(response);
      },
      (error: any) => {
        errorCallback(error);
      }
    );

  }

}
