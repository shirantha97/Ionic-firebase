import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import {
  ToastController,
  LoadingController,
  NavController,
} from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {} as User

  constructor(
    private toastCtrl: ToastController,
    private loadCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  async login(u: User) {
    console.log(u)
    if (this.formValidation()) {
      let loader = this.loadCtrl.create({
        message: "Please Wait",
      });
      (await loader).present();

      try {
        await this.afAuth
          .signInWithEmailAndPassword(u.email, u.password)
          .then((data) => {
            console.log(data);
          });

        this.navCtrl.navigateRoot("home");
      } catch (e) {
        console.log(e);
      }

      (await loader).dismiss()

    }
  }

  formValidation() {
    if (!this.user.email) {
      this.showToast("Enter E-mail");
      return false;
    }
    if (!this.user.password) {
      this.showToast("Enter Password");
      return false;
    }
    return true;
  }

  showToast(msg: string) {
    this.toastCtrl
      .create({
        message: msg,
        duration: 3000,
        position: "bottom",
        color: "primary",
      })
      .then((toastData) => {
        toastData.present();
      });
  }

}
