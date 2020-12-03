import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoffeeOrderRoutingModule } from './coffee-order-routing.module';
import { CoffeeOrderComponent } from './coffee-order.component';


@NgModule({
  declarations: [CoffeeOrderComponent],
  imports: [
    CommonModule,
    CoffeeOrderRoutingModule
  ]
})
export class CoffeeOrderModule { }
