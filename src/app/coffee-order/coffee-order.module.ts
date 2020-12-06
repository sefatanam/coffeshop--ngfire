import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoffeeOrderRoutingModule} from './coffee-order-routing.module';
import {CoffeeOrderComponent} from './coffee-order.component';
import {OrdersComponent} from './orders/orders.component';
import {OrderListComponent} from './order-list/order-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {OrdersService} from './orders.service';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';


@NgModule({
  declarations: [CoffeeOrderComponent, OrdersComponent, OrderListComponent],
  imports: [
    CommonModule,
    CoffeeOrderRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [OrdersService]
})
export class CoffeeOrderModule {
}
