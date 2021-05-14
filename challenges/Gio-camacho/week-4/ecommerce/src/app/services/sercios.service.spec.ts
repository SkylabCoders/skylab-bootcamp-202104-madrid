import { TestBed } from '@angular/core/testing';

import { SerciosService } from './sercios.service';

describe('SerciosService', () => {
  let service: SerciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
