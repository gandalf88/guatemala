import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyNavService {

  constructor() { }

  myParam: any;

  public setParam(value){
    this.myParam = value;
  }
  public getParam(){
    return this.myParam;
  }
}
