import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NoticeBoardInitialComponent } from './notice-board-initial/notice-board-initial.component';
import { NoticeBoardInitialRoutingModule } from './notice-routing.module';
import { NoticeService } from './service/notice.service';
import { NoticeBoardControlComponent } from './notice-board-control/notice-board-control.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    NoticeBoardInitialComponent,
    NoticeBoardControlComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,   
    HttpClientModule, 
    FormsModule,    
    NoticeBoardInitialRoutingModule,
    SharedModule
  ],  
  providers: [    
    NoticeService
  ]
})
export class NoticeModule { }