import { Component } from '@angular/core';
import { IonicPage, NavParams, ModalController } from 'ionic-angular';
import { InitiateStorePage } from '../initiate-store/initiate-store';
import { Store } from '../../models/stores';
import { StoresService } from '../../services/stores';
import { StorePage } from '../store/store';


@IonicPage()
@Component({
  selector: 'page-display-stores',
  templateUrl: 'display-stores.html',
})
export class DisplayStoresPage {
  initiateStorePage = InitiateStorePage;
  stores: Store[] = [];
  constructor(public modalCtrl: ModalController, private storesServ: StoresService) {
  }

  ionViewWillEnter() {
    this.stores = this.storesServ.loadStores();

  }
  onOpenStore(store: Store, index: number) {
    const modal = this.modalCtrl.create(StorePage, { store: store, index: index });
    modal.present();
  }
}
