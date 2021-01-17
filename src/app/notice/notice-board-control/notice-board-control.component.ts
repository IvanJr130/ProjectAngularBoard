import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { utils } from 'protractor';
import { MessageComponent } from 'src/app/shared/message/message.component';
import { TITLE } from 'src/app/shared/utils/enum/title';
import Utils from 'src/app/shared/utils/utils/utils';
import { Operation } from '../../shared/utils/enum/operation';
import { Notice } from '../service/notice';
import { NoticeService } from '../service/notice.service';


@Component({
  selector: 'app-notice-board-control',
  templateUrl: './notice-board-control.component.html',
  styleUrls: ['./notice-board-control.component.css']
})
export class NoticeBoardControlComponent implements OnInit {

  @Input('notice') notice:Notice;
  @Input('operation') operation:string;

  @Output('returnOperation')returnOperation = new EventEmitter();
  @Output('retornoObject')retornoObject = new EventEmitter();

  bValidate:boolean = true;
  bRequiredTitle:boolean = true;
  title:string = ''; 
  @ViewChild(MessageComponent) MsgComponent: MessageComponent;

  constructor(private noticeService:NoticeService) { }

  ngOnInit(){
    if(this.notice == null){
      this.notice = new Notice();
    }
    if(this.operation == Operation.INCLUDE){
      this.title = TITLE.INCLUDE + " NOTICE ";
      this.notice.publicationDate = Utils.getCurrentDay();
    }else if(this.operation == Operation.UPDATE){
      this.title = TITLE.UPDATE + " NOTICE " + this.notice.id;
      this.notice.viewDate = Utils.getCurrentDay();
    
    }else{
      this.title = TITLE.VIEW + " NOTICE " +  this.notice.id;
      this.notice.viewDate = Utils.getCurrentDay();
      this.update();
    }
  }

  comeBack(){   
    if(this.operation == Operation.UPDATE){
      this.update();
    }
    this.operation = Operation.SEARCH
    this.notice = new Notice;
    this.retornoObject.emit(this.notice);
    this.returnOperation.emit(this.operation);
  }

  save(){
    this.bValidate = this.validate();
    if(this.bValidate){
      this.noticeService.saveNotice(this.notice).subscribe(
        data =>{
           this.MsgComponent.setSucess(data.toString());
           setTimeout(() => {
            this.comeBack();
          }, 2000);
      
        },
        err =>{
          this.MsgComponent.setError(err.toString());
    
        }
      )
    }else{
      
    }
   
  }

  update() {
    this.bValidate = this.validate();
    if(this.bValidate){
      this.noticeService.updateNotice(this.notice).subscribe(
        data =>{
           console.log(data);
           if(this.operation != Operation.VIEW){
            this.MsgComponent.setSucess(data.toString());
              setTimeout(() => {
                  this.comeBack();
              }, 2000);
           }          
        },
        err =>{
          this.MsgComponent.setError(err.toString());
        }
      )
    }
  }

 validate():boolean{
   let validate:boolean = true
   this.bRequiredTitle = true;
    if(this.notice.title == ''){     
      this.bRequiredTitle = false;
      return false;
    }
  return validate;
  }

}
