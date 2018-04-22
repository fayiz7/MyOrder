import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { SetLocationPage } from '../set-location/set-location';
import { Location } from '../../models/location';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-initiate-store',
  templateUrl: 'initiate-store.html',
})
export class InitiateStorePage {
  location: Location = {
    lat: 21.489123,
    lng: 39.245947
  };
  imageUrl: '';

  constructor(private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private geolocation: Geolocation,
    private camera: Camera
  ) {
  }

  onOpenMap() {
    const modal = this.modalCtrl.create(SetLocationPage, { location: this.location });
    modal.present();
    modal.onDidDismiss(
      data => {
        if (data) {
          this.location = data.location;
        }
      });
  }
  onLocate() {
    const loader = this.loadingCtrl.create({
      content: 'Getting your Location...'
    });
    loader.present();
    this.geolocation.getCurrentPosition()
      .then(
        location => {
          loader.dismiss();
          this.location.lat = location.coords.latitude;
          this.location.lng = location.coords.longitude;

        }
      )
      .catch(
        error => {
          loader.dismiss();
          const toast = this.toastCtrl.create({
            message: 'Could get location, please pick it manually!',
            duration: 2500
          });
          toast.present();
        }
      );
  }


  onTakePhoto() {
    this.camera.getPicture({
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    })
      .then(
        ImageData => {
          console.log(ImageData);
          this.imageUrl = ImageData;
        })
      .catch(
        error => {
          console.log(error);
        }
      )

  }
}
