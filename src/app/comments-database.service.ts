import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class CommentsDatabaseService implements InMemoryDbService {

  constructor() { }

  // right now only photo entity is used, but could be expanded later
  createDb() {
    let comments = [
      { id: 1, entityType: 'photo', entityId: 1, datetime: '2017-04-23T06:01:43.511Z', username: 'John', content: "Neat photo" },
      { id: 2, entityType: 'photo', entityId: 2, datetime: '2017-04-23T10:13:43.511Z', username: 'Staci', content: "Great photo" },
      { id: 3, entityType: 'photo', entityId: 1, datetime: '2017-05-23T18:11:43.511Z', username: 'Jane', content: "Good job" },
      { id: 4, entityType: 'photo', entityId: 1, datetime: '2017-05-23T20:22:36.511Z', username: 'Abby', content: "Anoter platitude" },
      { id: 5, entityType: 'photo', entityId: 2, datetime: '2017-05-23T20:43:41.511Z', username: 'Allen', content: "Execellent" }
    ];

    return { comments };
  }

}