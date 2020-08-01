import { Component } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  posts: any

  constructor(
    private loadCtrl: LoadingController,
    private toastCtrl : ToastController,
    private firestore: AngularFirestore
    ) {}

  
  ionViewWillEnter(){

  }

  async getPosts(){
    let loader = this.loadCtrl.create({
      message: "Please Wait",
    });
    (await loader).present();
    try{
      this.firestore.collection('posts')
      .snapshotChanges()
      .subscribe(data => {
        this.posts = data.map(e =>{
          return {
            id: e.payload.doc.id,
            title: e.payload.doc.data()["title"],
            details: e.payload.doc.data()["details"]
          };
        });
      });
      (await loader).dismiss();
    }catch(e){
      this.showToast(e)
    }
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
