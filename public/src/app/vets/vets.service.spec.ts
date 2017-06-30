import { TestBed, inject } from '@angular/core/testing';

import { VetsService } from './vets.service';

describe('VetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VetsService]
    });
  });

  it('should be created', inject([VetsService], (service: VetsService) => {
    expect(service).toBeTruthy();
  }));
});
