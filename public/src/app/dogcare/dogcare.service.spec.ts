import { TestBed, inject } from '@angular/core/testing';

import { DogcareService } from './dogcare.service';

describe('DogcareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DogcareService]
    });
  });

  it('should be created', inject([DogcareService], (service: DogcareService) => {
    expect(service).toBeTruthy();
  }));
});
