import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import{FirebaseListObservable} from 'angularfire2/database-deprecated';




@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {
  // Creating new obj
  shoppingItem = {} as ShoppingItem;
  //$ sign because its observable
  shoppingItemRef$: FirebaseListObservable<ShoppingItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private databse: AngularFireDatabase) {
    this.shoppingItemRef$ = this.databse.list('shopping-list');
  }


  addShoppingItem(shoppingItem: ShoppingItem) {
    this.shoppingItemRef$.push({
      itemName: this.shoppingItem.itemName,
      itemNumber: this.shoppingItem.itemNumber,
      itemId: this.shoppingItem.itemId,
      itemPrice: this.shoppingItem.itemPrice
    });
  }

}