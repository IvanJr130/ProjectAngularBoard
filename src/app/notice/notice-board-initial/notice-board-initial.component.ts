import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageComponent } from 'src/app/shared/message/message.component';
import { TITLE } from 'src/app/shared/utils/enum/title';
import { Operation } from '../../shared/utils/enum/operation';
import { Notice } from '../service/notice';
import { NoticeService } from '../service/notice.service';

@Component({
  selector: 'app-notice-board-initial',
  templateUrl: './notice-board-initial.component.html',
  styleUrls: ['./notice-board-initial.component.css']
})
export class NoticeBoardInitialComponent implements OnInit {

  notice:Notice;  
  notices: any[];
  operation:string = '';

  idFilter:string = '';

  title:string = '';
  bRequiredTitle:boolean = false;
  
  @ViewChild(MessageComponent) MsgComponent: MessageComponent;
  constructor(private noticeService:NoticeService) { }

  ngOnInit() {
    this.notice = new Notice;
    this.operation = Operation.SEARCH
    this.title = TITLE.SEARCH;
  
  }


  search(){  
      this.notice.id = parseInt(this.idFilter);
      if(this.idFilter == ''){
        this.noticeService.getNoticeList().subscribe(
          data=>{
              this.notices = data;
          },
          err =>{
            this.MsgComponent.setError(err.toString());
          }
          
       )  
     }else{
      this.noticeService.getFilterNoticeList(this.notice.id).subscribe(
        data=>{            
              this.notices = [];
              this.notices.push(data)
        },
        err =>{
          this.MsgComponent.setError(err.toString());
        }
        
     )  
     }
    
  }

  include(){
    this.notice = new Notice();
    this.operation = Operation.INCLUDE;
  }
  edit(event:any){
    this.notices.forEach(notice => {
      if(event == notice.id){
        this.notice.id = event;
        this.notice.title = notice.title
        this.notice.publicationDate = notice.publicationDate;
        this.notice.description = notice.description;

      }
    });
    if(this.operation != Operation.VIEW){
      this.operation = Operation.UPDATE;

    }
   
  }

  delete(event:any){
   if(event > 0){
    this.noticeService.deleteNotice(event).subscribe(
      data =>{    
         this.search();
      },
      err =>{
        this.MsgComponent.setError(err.toString());
      }
    )  
   }      
  }

  view(event:any){
    this.operation = Operation.VIEW;
    this.edit(event);
  }

  setObject(noticeParam:Notice){
    this.notice = noticeParam;
    this.search();
  }
}
