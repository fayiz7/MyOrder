import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';


import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';


/**
 * Generated class for the EditShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {

  shoppingItemRef$: FirebaseObjectObservable<ShoppingItem>;
  shoppingItem = {} as ShoppingItem;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private database: AngularFireDatabase
  ) {
    //capture the shoppingItemId as navParams
    const shoppingItemId = this.navParams.get('shoppingItemId');
    console.log(shoppingItemId);
    //set the scope of our Firebase object equal to our selected item
    //this.shoppingItemRef$ = this.database.object('shopping-list/${shoppingItemId}');

    //subscribe to the object and assign the result to this.shoppingitem
    //this.shoppingItemRef$.subscribe(shoppingItem=> this.shoppingItem=shoppingItem);
  }

  //update our firebase node with new item data
  //editShoppingItem(shoppingItem: ShoppingItem){this.shoppingItemRef$.update(shoppingItem);
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad EditShoppingItemPage');
  }

}
