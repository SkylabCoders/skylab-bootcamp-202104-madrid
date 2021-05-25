import { TestBed } from '@angular/core/testing';

import { RealstateService } from './realstate.service';

describe('RealstateService', () => {
  let service: RealstateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealstateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
