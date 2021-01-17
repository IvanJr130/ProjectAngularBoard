import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { InputtextComponent } from "./inputtext/inputtext.component";
import { ButtonComponent } from './button/button.component';
import { DatatableComponent } from './datatable/datatable.component'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { BrowserModule } from "@angular/platform-browser";
import { InputextareaComponent } from './inputextarea/inputextarea.component';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    InputtextComponent,
    ButtonComponent,
    DatatableComponent,
    InputextareaComponent,    
    MessageComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule, 
    ReactiveFormsModule,
  
  ],
  exports:[
    InputtextComponent,
    InputextareaComponent,
    MessageComponent
   
  ],
  providers: [
 
  ]
})
export class SharedModule { }
