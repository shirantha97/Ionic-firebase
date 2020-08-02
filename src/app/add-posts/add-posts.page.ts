import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import {ToastController, LoadingController} from '@ionic/angular'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.page.html',
  styleUrls: ['./add-posts.page.scss'],
})
export class AddPostsPage implements OnInit {

  post = {} as Post;
  
  constructor(
    private toastCtrl: ToastController,
    private loadCtrl: LoadingController,
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
  }

  async createPost(p: Post){

    if(this.formValidation()){
      let loader = this.loadCtrl.create({
        message: "Please Wait",
      });
  
      (await loader).present();

      try{
        await this.firestore.collection('posts').add(p)
      }catch(e){
        this.showToast(e)
      }
      (await loader).dismiss();

    }    
  }  

  formValidation() {
    if (!this.post.title) {
      this.showToast("Enter a title");
      return false;
    }
    if (!this.post.details) {
      this.showToast("Enter details");
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
