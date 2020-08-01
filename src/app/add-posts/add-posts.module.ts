import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPostsPageRoutingModule } from './add-posts-routing.module';

import { AddPostsPage } from './add-posts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPostsPageRoutingModule
  ],
  declarations: [AddPostsPage]
})
export class AddPostsPageModule {}
