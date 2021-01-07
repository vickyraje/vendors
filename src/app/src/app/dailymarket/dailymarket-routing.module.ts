import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailymarketPage } from './dailymarket.page';

const routes: Routes = [
  {
    path: '',
    component: DailymarketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailymarketPageRoutingModule {}
