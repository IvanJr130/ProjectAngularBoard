import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notice } from './notice';

@Injectable()
export class NoticeService {

  private baseUrl = 'http://localhost:8080/board/';

  constructor(private http: HttpClient) { }

  saveNotice(notice:Notice){
    return this.http.post(this.baseUrl + 'create',notice,{responseType:'text' as 'json'});
  }

  getNoticeList(): Observable<Notice[]> {
    return this.http.get<Notice[]>(this.baseUrl + "list/");
  }

  getFilterNoticeList(id:number): Observable<Notice[]> {
    return this.http.get<Notice[]>(this.baseUrl + "list/" + id);
  }

  updateNotice(notice:Notice){   
    return this.http.put<Notice>(this.baseUrl + "update",notice,{responseType:'text' as 'json'});
  }

  
  deleteNotice(id:Number){   
    return this.http.delete<Notice>(this.baseUrl + 'delete/' + id,{responseType:'text' as 'json'});
  }
}