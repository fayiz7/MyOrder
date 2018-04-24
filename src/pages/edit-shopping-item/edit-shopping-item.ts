import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
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
  shoppingItemRef$: FirebaseListObservable<ShoppingItem>;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private database: AngularFireDatabase
  ) {
    //capture the shoppingItemId as navParams
    const shoppingItemId = this.navParams.get('shoppingItemId');
    this.shoppingItemRef$ = this.database.object('shopping-list/${shoppingItemId}');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditShoppingItemPage');
  }

}
