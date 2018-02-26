import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  arrData = []

  @ViewChild('username') user;
  @ViewChild('password') password;
  constructor(private fdb: AngularFireDatabase, private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    this.fdb.list("/allUsers/")
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']

    }).present();
  }
  registerUser() {
    this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value)
      .then(data => {
        console.log('got data ', data);
        this.alert('Registred account with username: ' + this.user.value);
      })
      .catch(error => {
        console.log('got an error', error);
        this.alert(error.message);
      });
    console.log('would register user with', this.user.value, this.password.value);

  }
}
