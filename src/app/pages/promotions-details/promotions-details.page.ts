import { Component, OnInit } from '@angular/core';
import { MyNavService } from 'src/app/services/my-nav/my-nav.service';

@Component({
  selector: 'app-promotions-details',
  templateUrl: './promotions-details.page.html',
  styleUrls: ['./promotions-details.page.scss'],
})
export class PromotionsDetailsPage implements OnInit {

  details: any;

  constructor( public myNavService: MyNavService) { 

    console.log("PromotionsDetailsPage - ngOnInit");
    this.details = this.myNavService.getParam();
    console.log(this.details);

  }

  ngOnInit() {

  }

}
