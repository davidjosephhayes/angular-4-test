import 'rxjs/add/operator/switchMap'
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Photo } from '../photo';
import { PhotoService } from '../photo.service'

@Component({
  selector: 'app-photo-info',
  templateUrl: './photo-info.component.html',
  styleUrls: ['./photo-info.component.css']
})

export class PhotoInfoComponent implements OnInit {

  photo: Photo;

  constructor(
    private photoService: PhotoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.switchMap(
      (params: Params) => this.photoService.getPhoto(+params['id'])
    ).subscribe(photo => this.photo = photo);
  }

}
