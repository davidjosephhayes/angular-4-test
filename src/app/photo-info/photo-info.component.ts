import 'rxjs/add/operator/switchMap'
import { Component, OnInit, OnChanges, DoCheck, KeyValueDiffers, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Photo } from '../photo';

import { PhotoService } from '../photo.service'

@Component({
  selector: 'app-photo-info',
  templateUrl: './photo-info.component.html',
  styleUrls: ['./photo-info.component.css']
})

export class PhotoInfoComponent implements OnInit, OnChanges, DoCheck {

  @Input() photo: Photo; // the photo to be used
  differ: any; // check for changes on the photo object to re update styles
  @Input() photoIdParam: Boolean; // was an id passed from the route, if this is true and photo is empty, we have an issue
  title: String = 'Workspace';

  constructor(
    private photoService: PhotoService,
    private route: ActivatedRoute,
    private differs: KeyValueDiffers
  ) { 
    this.differ = differs.find({}).create(null);
  }

  ngOnInit() {
    this.route.params.switchMap(
      (params: Params) => this.photoService.getPhoto(+params['id'])
    ).subscribe(photo => this.photo = photo);
  }

  // this doesnt do what i thought it did
  ngOnChanges(changes) {
      // console.log(changes);
      // this.setCurrentStyles()
  }

  ngDoCheck() {
    var changes = this.differ.diff(this.photo);
    if(changes) {
			// console.log('changes detected');
			// changes.forEachChangedItem(r => console.log('changed ', r.currentValue));
			// changes.forEachAddedItem(r => console.log('added ' + r.currentValue));
			// changes.forEachRemovedItem(r => console.log('removed ' + r.currentValue));
      this.setCurrentStyles();
		} else {
			// console.log('nothing changed');
		}
  }

  // rotate the current image data by an amount
  rotate(relativeRotation: number) {
    if (!this.photo) return;
    this.photo.rotation += relativeRotation;
    this.photo.rotation %= 360; // we dont really care if its spun around 20 times
  }

  currentStyles: {};
  setCurrentStyles() {
    this.currentStyles = {
      'transform':  this.photo ? 'translate(-50%, -50%) rotate(' + this.photo.rotation + 'deg)' : 'none' // rotate the photo per its current rotation state
    };
  }

  
}
