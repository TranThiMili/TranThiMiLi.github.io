import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentComponent} from './app-content/app-content.component';
import {DetailContentComponent} from './app-detail/app-detail.component';

const routes: Routes = [
  {
    path: "",
    component: ContentComponent
  },
  {
    path: "detail",
    component: DetailContentComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
