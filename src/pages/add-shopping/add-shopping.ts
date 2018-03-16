import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import{FirebaseListObservable} from 'angularfire2/database-deprecated';


=======
import {ShoppingItem} from '../../models/shopping-item/shopping-item.interface';
/**
 * Generated class for the AddShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
>>>>>>> 0163938ba9de5a1a8f4687cdefa09d707e833cb5

@IonicPage()
@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {
<<<<<<< HEAD
  // Creating new obj
  shoppingItem = {} as ShoppingItem;
  //$ sign because its observable
  shoppingItemRef$: FirebaseListObservable<ShoppingItem[]>
=======
shoppingItem = {} as ShoppingItem;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
>>>>>>> 0163938ba9de5a1a8f4687cdefa09d707e833cb5

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private databse: AngularFireDatabase) {
    this.shoppingItemRef$ = this.databse.list('shopping-list');
  }

<<<<<<< HEAD

  addShoppingItem(shoppingItem: ShoppingItem) {
    this.shoppingItemRef$.push({
      itemName: this.shoppingItem.itemName,
      itemNumber: this.shoppingItem.itemNumber,
      itemId: this.shoppingItem.itemId,
      itemPrice: this.shoppingItem.itemPrice
    });
  }
<<<<<<< HEAD

}
=======
=======
>>>>>>> parent of 0163938... Resolved All Merge Conflicts.
}
>>>>>>> 0163938ba9de5a1a8f4687cdefa09d707e833cb5
