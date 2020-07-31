import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model'
import { async } from '@angular/core/testing';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = {} as User

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }


  async register(u){
    if(this.formValidation()){

    }
  }

  formValidation(){
    if(!this.user.email){
      this.showToast('Enter E-mail')
      return false;
    }
  }

  showToast(msg: string){
    this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: "bottom",
      color: "primary"
    }).then(toastData =>{
      toastData.present();
    })
  }

}
