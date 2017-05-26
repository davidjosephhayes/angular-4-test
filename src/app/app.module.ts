import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/photos.component';
// import { PhotoComponent } from './photo/photo.component';
import { PhotoInfoComponent } from './photo-info/photo-info.component';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component'

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { PhotoService } from './photo.service';
// import { PhotosDatabaseService } from './photos-database.service';

import { CommentService } from './comment.service';
import { CommentsDatabaseService } from './comments-database.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// import { MaterialModule, MdList, MdListItem } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    // PhotoComponent,
    PhotoInfoComponent,
    PhotoCommentsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(CommentsDatabaseService),
    // InMemoryWebApiModule.forRoot(PhotosDatabaseService),
    // MaterialModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    PhotoService,
    CommentService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
