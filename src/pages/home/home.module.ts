import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ShareModule } from "../../components/share.module";

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    ShareModule
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}
