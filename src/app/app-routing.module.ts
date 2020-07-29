import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddComponent} from './add/add.component';
import {FetchComponent} from './fetch/fetch.component'


const routes: Routes = [
  {
    path:'add',
    component:AddComponent
  },
  {
    path:'fetch',
    component : FetchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
