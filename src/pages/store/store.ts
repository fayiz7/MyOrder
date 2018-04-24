import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Store } from "../../models/stores";
import { StoresService } from "../../services/stores";

@Component({
  selector: 'page-store',
  templateUrl: 'store.html'
})
export class StorePage {
  store: Store;
  index: number;

  constructor(public navParams: NavParams,
    private viewCtrl: ViewController,
    private storeService: StoresService) {
    this.store = this.navParams.get('store');
    this.index = this.navParams.get('index');
  }

  onLeave() {
    this.viewCtrl.dismiss();
  }
 
  onDelete() {
    this.storeService.deleteStore(this.index);
    this.onLeave();
  }
}
