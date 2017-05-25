import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PhotoInfoComponent } from '../photo-info/photo-info.component';
// import { PhotosComponent } from '../photos/photos.component';

const routes: Routes = [
  { path: 'photo/:id', component: PhotoInfoComponent },
  //{ path: 'photots', component: PhotosComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }