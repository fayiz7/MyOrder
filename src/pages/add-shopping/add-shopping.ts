import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import { AngularFireDatabase } from 'angularfire2/database-deprecated'
import { FirebaseListObservable } from 'angularfire2/database-deprecated';



@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {
  shoppingItem = {} as ShoppingItem;
  //obaservable
  shoppingItemRef$: FirebaseListObservable<ShoppingItem[]>


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private database: AngularFireDatabase) {
    this.shoppingItemRef$ = this.database.list('shopping-list');
  }

  addShoppingItem(shoppingItem: ShoppingItem) {
    this.shoppingItemRef$.push({
      itemId: this.shoppingItem.itemId,
      itemName: this.shoppingItem.itemName,
      itemNumber: Number(this.shoppingItem.itemNumber),
      itemDesc: this.shoppingItem.itemDesc,
      itemPrice: Number(this.shoppingItem.itemPrice)

    });

    //reset shoppingItem
    shoppingItem = {} as ShoppingItem;

    //nav the user back to shoppingListPage
    this.navCtrl.pop();
  }
}
