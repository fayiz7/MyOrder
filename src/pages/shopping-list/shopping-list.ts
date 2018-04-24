import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AddShoppingPage } from '../add-shopping/add-shopping';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  shoppingListRef$: FirebaseListObservable<ShoppingItem[]>

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: AngularFireDatabase,
    private actionSheetCtrl: ActionSheetController) {
    this.shoppingListRef$ = this.database.list('shopping-list');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingListPage');
  }
selectShoppingItem(shoppingItem: ShoppingItem){

  /*desply an actionsheet that gives the user the folling option
  1-edit the ShoppingItem
  2-delete the ShoppingItem
  3- cancel selection "deselect"
  */
  this.actionSheetCtrl.create({
    title: `${shoppingItem.itemName}`,
    buttons: [
      {
        text: 'Edit',
        handler: () =>{
          //send the user to the editshoppingitempage and pass the key as a parameter

        }
      },
      {
        text: 'Delete',
        role: 'destructive',
        handler: () => {
          //delete the current shoppingItem
          this.shoppingListRef$.remove(shoppingItem.$key);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log("the user has selected the cancel button");
        }
      }
    ]
  }).present();
}
  navigateToAddShoppingPage() {
    this.navCtrl.push(AddShoppingPage)

  }
}
