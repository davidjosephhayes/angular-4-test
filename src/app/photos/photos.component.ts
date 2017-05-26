import { Component, OnInit, Input } from '@angular/core';
import { /* Router, */ ActivatedRoute, Params } from '@angular/router';

import { Photo } from '../photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: Photo[]; // a list of photos for the thumb nails
  selectedPhoto: Photo; // the currently selected photo
  photoIdParam: boolean = false; // was an id passed from the route, if this is true and photo is empty, we have an issue
  title: string = 'Photo Gallery';

  constructor (
    // private router: Router, 
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) {  }

  ngOnInit() {
    this.photoService.getPhotos().then(photos => {
      this.photos = photos;
      this.setThumnailStateStyles();
    });

    /*
    The reason that the params property on ActivatedRoute is an Observable 
    is that the router may not recreate the component when navigating to 
    the same component. In this case the parameter may change without the 
    component being recreated.
    */
    this.route.params
      .switchMap((params: Params) => this.photoService.getPhoto(+params.id))
      .subscribe(photo => {
        this.selectedPhoto = photo;
      });
     this.route.params
      .subscribe(params => {
        this.photoIdParam = typeof params.id == 'undefined' || params.id == null;
      });
      
  }
 
  onSelect(photo: Photo): void {
    this.photoIdParam = false;
    this.selectedPhoto = photo;
  }

  // showInfo(photo: Photo): void {
  //   this.selectedPhoto = photo;
  //   this.router.navigate(['/photo', this.selectedPhoto.id]);
  // }
  thumnailStateStyles: {};
  setThumnailStateStyles() {
    this.thumnailStateStyles = {
      'width':  this.photos.length*160 + 'px' // set the width of the thumnail stage
    };
  }

  getThumnailStyles(photo: Photo) {
    let thumnailStyles = {
      'transform':  photo ? 'translate(-50%, -50%) rotate(' + photo.rotation + 'deg)' : 'none' // rotate the photo per its current rotation state
    };
    return thumnailStyles;
  }
}
