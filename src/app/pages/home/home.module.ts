import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MiComponenteComponent } from '../../mi-componente/mi-componente.component';
import { PromotionsListComponentModule } from '../../components/promotions-list/promotions-list.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    PromotionsListComponentModule
  ],
  declarations: [HomePage],
  schemas: [ MiComponenteComponent ]
})
export class HomePageModule {}
