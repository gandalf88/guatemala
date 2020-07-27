import { Component, OnInit, Input } from '@angular/core';
import { Promotion } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-promotions-list',
  templateUrl: './promotions-list.component.html',
  styleUrls: ['./promotions-list.component.scss'],
})
export class PromotionsListComponent implements OnInit {

  @Input() promotions: any = [];

  constructor() {  console.log(this.promotions); }

  ngOnInit() {
    console.log("PromotionsListComponent");
  
  }

}
