import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisplayStoresPage } from './display-stores';

@NgModule({
  declarations: [
    DisplayStoresPage,
  ],
  imports: [
    IonicPageModule.forChild(DisplayStoresPage),
  ],
})
export class DisplayStoresPageModule {}
