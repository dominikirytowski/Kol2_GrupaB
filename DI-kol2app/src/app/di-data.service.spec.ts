import { TestBed } from '@angular/core/testing';

import { DIDataService } from './di-data.service';

describe('DIDataService', () => {
  let service: DIDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DIDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
