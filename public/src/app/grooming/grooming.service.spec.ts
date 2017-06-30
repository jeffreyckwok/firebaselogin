import { TestBed, inject } from '@angular/core/testing';

import { GroomingService } from './grooming.service';

describe('GroomingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroomingService]
    });
  });

  it('should be created', inject([GroomingService], (service: GroomingService) => {
    expect(service).toBeTruthy();
  }));
});
