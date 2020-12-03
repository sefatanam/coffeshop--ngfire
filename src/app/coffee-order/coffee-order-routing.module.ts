import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoffeeOrderComponent } from './coffee-order.component';

const routes: Routes = [{ path: '', component: CoffeeOrderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoffeeOrderRoutingModule { }
