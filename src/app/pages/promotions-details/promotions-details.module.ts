import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromotionsDetailsPageRoutingModule } from './promotions-details-routing.module';

import { PromotionsDetailsPage } from './promotions-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromotionsDetailsPageRoutingModule
  ],
  declarations: [PromotionsDetailsPage]
})
export class PromotionsDetailsPageModule {}
