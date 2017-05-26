import { TestBed, inject } from '@angular/core/testing';

import { PhotosDatabaseService } from './photos-database.service';

describe('PhotosDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotosDatabaseService]
    });
  });

  it('should be created', inject([PhotosDatabaseService], (service: PhotosDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
