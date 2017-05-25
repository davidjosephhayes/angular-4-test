import { Injectable } from '@angular/core';
import { Photo } from './photo'
import { PHOTOS } from './photos-store';

@Injectable()
export class PhotoService {

  getPhoto(id: number): Promise<Photo> {
    return this.getPhotos().then(photots => photots.find(photo => photo.id === id));
  }
  constructor() { }

  getPhotos(): Promise<Photo[]> {
    return Promise.resolve(PHOTOS);
  }

}
