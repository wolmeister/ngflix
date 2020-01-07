import { TestBed } from '@angular/core/testing';

import { MediaProgressService } from './media-progress.service';

describe('MediaProgressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediaProgressService = TestBed.get(MediaProgressService);
    expect(service).toBeTruthy();
  });
});
