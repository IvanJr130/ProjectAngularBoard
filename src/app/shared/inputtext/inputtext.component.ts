import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'notice-inputtext',
  templateUrl: './inputtext.component.html',
  styleUrls: ['./inputtext.component.css']
})
export class InputtextComponent implements OnInit {

  @Input('identifier') identifier: string = '';  
  @Input('name') name: string = '';
  @Input('initialvalue') initialvalue: string = '';
  @Input('disabled') disabled: boolean = false;
  @Input('required') required:boolean = true;
  @Input('fieldSize') fieldSize: number = 255;
  @Output('missFocus') missFocus: EventEmitter<string> = new EventEmitter();
  @Output("fieldValue") fieldValue : EventEmitter<string> = new EventEmitter();

  @Input('validateRequired') set setRequiredValue(value) {    
    if(!value){    
        this.required = value;
    }
  } 

  constructor() { }

  ngOnInit(): void {
  }

  setValue(value:string) :void{
    this.fieldValue.emit(value);
  }

  onblurr(value:string){
    this.missFocus.emit(value);
  }

}
