import { TestBed, inject } from '@angular/core/testing';

import { CommentsDatabaseService } from './comments-database.service';

describe('CommentsDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentsDatabaseService]
    });
  });

  it('should be created', inject([CommentsDatabaseService], (service: CommentsDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
