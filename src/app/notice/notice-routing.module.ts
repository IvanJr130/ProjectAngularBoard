
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticeBoardInitialComponent } from './notice-board-initial/notice-board-initial.component';


const routes: Routes = [
  {
    path: '',
    component: NoticeBoardInitialComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticeBoardInitialRoutingModule { }