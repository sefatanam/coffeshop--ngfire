import {Component, OnInit} from '@angular/core';
import {OrdersService} from '../orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  coffeeOrders;

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit(): void {
    this.getCoffeeOrders();
  }

  getCoffeeOrders = () => this.ordersService.getCoffeeOrders().subscribe(res => (this.coffeeOrders = res));

  markCompleted = data => this.ordersService.updateCoffeeOrder(data);

  deleteOrder = data => this.ordersService.deleteCoffeeOrder(data);
}
