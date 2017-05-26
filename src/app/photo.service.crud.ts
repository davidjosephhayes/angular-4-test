import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Photo } from './photo'

@Injectable()
export class PhotoService {

  constructor(private http: Http) {

  }

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private photosUrl = 'api/photos'; // url to get photos for a photo

  getPhotos(): Promise<Photo[]> {
    return this.http.get(this.photosUrl)
      .toPromise()
      .then(response => response.json().data as Photo[])
      .catch(this.handleError);
  }

  getPhoto(id: number): Promise<Photo> {
    const url = this.photosUrl + '/' + id;
    return this.http.get(this.photosUrl)
      .toPromise()
      .then(response => response.json().data as Photo)
      .catch(this.handleError);
  }

  createPhoto(photo: Photo): Promise<Photo> {
    return this.http
      .post(this.photosUrl, JSON.stringify(photo), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Photo)
      .catch(this.handleError);
  }
 
  updatePhoto(photo: Photo): Promise<Photo> {
    const url = this.photosUrl + '/' + photo.id;
    return this.http
      .put(url, JSON.stringify(photo), { headers: this.headers })
      .toPromise()
      .then(() => photo)
      .catch(this.handleError);
  }
 
  deletePhoto(photo: Photo): Promise<void> {
    const url = this.photosUrl + '/' + photo.id;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  } 

}