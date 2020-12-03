import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'coffeeOrder', loadChildren: () => import('./coffee-order/coffee-order.module').then(m => m.CoffeeOrderModule) },
  { path: '**', redirectTo: 'coffeeOrder' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
