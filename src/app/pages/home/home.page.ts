import { Component, OnInit } from '@angular/core';
import { PromotionsInterface, PromotionsService } from '../../services/promotions/promotions.service';
import { TokenInterface, TokenService } from '../../services/token/token.service';
import { Promotion, PaginationData } from '../../interfaces/interfaces';
import { MyNavService } from '../../services/my-nav/my-nav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements PromotionsInterface, TokenInterface, OnInit {

  promotions: any;
  pagination: any;
  details: any;
  numNext: any;
  numPrev: any;

  constructor(public promotionsService: PromotionsService, private router: Router,
              public tokenService: TokenService,  public myNavService: MyNavService) {
    this.numNext = 2;
    this.numPrev = 1;
  }

  ngOnInit(){

    const token: string = localStorage.getItem('token');

    if ( token === null || token === '' || token === undefined ) {
      this.tokenService.getToken(this);
    }else{
      this.promotionsService.promotionsPaginate(this);
    }

  }

  seeDetails( id ) {
    this.promotionsService.promotionsDetails(this, id);
  }
  prevList( value ) {
   
    if(value <= 1 &&  value === 1 && value == 0){
        ;
    }else if(value >= 2){
        this.promotionsService.promotionsPaginate(this,"/?page="+value);
        this.numNext -= 1;
        this.numPrev = this.numNext - 1;
    }
    console.log(" this.numPrev:"+  this.numPrev);
    console.log(" this.numNext:"+  this.numNext);
  }
  nextList( value ) {
   
    this.promotionsService.promotionsPaginate(this,"/?page="+value);
    this.numNext += 1;
    this.numPrev = this.numNext - 1;
   
    console.log(" this.numPrev:"+  this.numPrev);
    console.log(" this.numNext:"+  this.numNext);
  }
  onTokenRetrieve(response: any) {
    console.log('onTokenRetrieve');
    localStorage.setItem('token', response.token);
  }
  onTokenErrorRetrieve(response: any) {
    console.log('onPromotionsRetrieve');
  }
  onPromotionsRetrieve(response: any) {

    console.log('onPromotionsRetrieve');
    console.log(response);
    this.promotions = response.data;

    this.pagination = {
          current_page: response.current_page,
          first_page_url: response.first_page_url,
          from: response.from,
          last_page:  response.last_page,
          last_page_url:  response.last_page_url,
          next_page_url: response.next_page_url,
          path: response.path,
          per_page: response.per_page,
          prev_page_url: response.prev_page_url,
          to: response.to,
          total: response.total
    };

    console.log(this.promotions);
    console.log(this.pagination );

  }
  onPromotionsDetailsRetrieve(response: any) {

    this.myNavService.setParam(  response[0]);
    this.router.navigate(['/promotions-details']);
  }

  onPromotionsErrorRetrieve(response: any) {
    console.log('onPromotionsErrorRetrieve');
    console.log(response);
  }

  onPromotionsDetailsErrorRetrieve(response: any) {
    console.log('onPromotionsDetailsErrorRetrieve');
    console.log(response);
  }

}
