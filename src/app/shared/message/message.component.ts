import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'notice-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  public errorMsg: string;
  public sucessMsg: string;

  constructor() { }

  ngOnInit(): void {
  
  }

  setError(message: string, tempo: number = 5000) {
    this.errorMsg = message;
    setTimeout(() => {
      this.errorMsg = null;
    }, tempo);
  }

  setSucess(message: string, tempo: number = 5000) {
    this.sucessMsg = message;
    setTimeout(() => {
      this.sucessMsg = null;
    }, tempo);
  }

}
