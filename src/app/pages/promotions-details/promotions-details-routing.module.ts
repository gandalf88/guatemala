import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromotionsDetailsPage } from './promotions-details.page';

const routes: Routes = [
  {
    path: '',
    component: PromotionsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromotionsDetailsPageRoutingModule {}
