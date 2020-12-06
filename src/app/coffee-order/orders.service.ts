import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  form = new FormGroup({
    customerName: new FormControl(''),
    orderNumber: new FormControl(''),
    coffeeOrder: new FormControl(''),
    completed: new FormControl(false)
  });

  constructor(private firestore: AngularFirestore) {
  }

  createCoffeeOrder = data => new Promise<any>((resolve, reject) => {
    this.firestore
      .collection('coffeeOrder')
      .add(data)
      .then(res => {
      }, err => reject(err));
  })

  getCoffeeOrders = () => this.firestore.collection('coffeeOrders').snapshotChanges();
}
