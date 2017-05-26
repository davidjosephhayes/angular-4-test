import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PhotoInfoComponent } from '../photo-info/photo-info.component';
import { PhotosComponent } from '../photos/photos.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  // { path: 'photo/:id', component: PhotoInfoComponent },
  // { path: 'photos', component: PhotosComponent }
  // should probably clean up these routes, lots of duplicates
  { path: '', redirectTo: 'photos', pathMatch: 'full' },
  { path: 'photos', component: PhotosComponent },
  { path: 'photos/:id', component: PhotosComponent },
  { path: '**', component: PageNotFoundComponent }
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