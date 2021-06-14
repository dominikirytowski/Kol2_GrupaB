import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DIForumComponent} from "./components/di-forum/di-forum.component";
import {DIForumDetailsComponent} from "./components/di-forum-details/di-forum-details.component";

const routes: Routes = [
  {
    path: '',
    component: DIForumComponent
  },
  {
    path: 'posts/:id',
    component: DIForumDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
