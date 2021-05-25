import { TestBed } from '@angular/core/testing';

import { HolapisosService } from './holapisos.service';

describe('HolapisosService', () => {
  let service: HolapisosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolapisosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
