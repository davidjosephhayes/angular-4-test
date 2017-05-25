import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Photo } from './photo';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers : [PhotoService],
  providers: [],
})
export class AppComponent implements OnInit {

  photo: Photo;
  photos: Photo[];
  selectedPhoto: Photo;

  constructor (private router: Router, private photoService: PhotoService) {
  }

  ngOnInit() {
  //   this.photoService.getPhotos();
  }

  title = 'Photo Gallery';
  
  onSelect(photo: Photo): void {   
    this.selectedPhoto = photo;
  }

  // showInfo(photo: Photo): void {
  //   this.selectedPhoto = photo;
  //   this.router.navigate(['/photo', this.selectedPhoto.id]);
  // }

}
