import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemberDetailPage } from './member-detail';
import { ShareModule } from "../../components/share.module";

@NgModule({
  declarations: [
    MemberDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MemberDetailPage),
    ShareModule
  ],
  exports: [
    MemberDetailPage
  ]
})
export class MemberDetailPageModule {}
