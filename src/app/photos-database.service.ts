import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class PhotosDatabaseService implements InMemoryDbService {

  constructor() { }

  // right now only photo entity is used, but could be expanded later
  createDb() {
    let photos = [
      { id: 1, rotation: 0, name: 'Photo 1', src: 'http://placehold.it/350x150' },
      { id: 2, rotation: 0, name: 'Photo 2', src: 'http://placehold.it/8008x135' },
      { id: 3, rotation: 0, name: 'Photo #3' , src: 'http://placehold.it/500x500' },
      { id: 4, rotation: 180, name: 'Photo #4' , src: 'http://placehold.it/500x500' },
      { id: 10, rotation: 0, name: 'Photo #10' , src: 'http://placehold.it/500x500' },
      { id: 12, rotation: 0, name: 'Photo #12' , src: 'http://placehold.it/500x500' },
      { id: 100, rotation: -90, name: 'Photo #100' , src: 'http://placehold.it/500x500' },
    ];

    return { photos };
  }

}