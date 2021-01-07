import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderPageRoutingModule } from './order-routing.module';

import { OrderPage } from './order.page';

import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,MatSelectModule,MatButtonModule,MatTableModule,
    OrderPageRoutingModule
  ],
  declarations: [OrderPage]
})
export class OrderPageModule {}
