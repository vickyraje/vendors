import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailymarketPageRoutingModule } from './dailymarket-routing.module';

import { DailymarketPage } from './dailymarket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailymarketPageRoutingModule
  ],
  declarations: [DailymarketPage]
})
export class DailymarketPageModule {}
