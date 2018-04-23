import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InitiateStorePage } from './initiate-store';

@NgModule({
  declarations: [
    InitiateStorePage,
  ],
  imports: [
    IonicPageModule.forChild(InitiateStorePage),
  ],
})
export class InitiateStorePageModule {}
