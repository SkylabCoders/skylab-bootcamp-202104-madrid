import { TestBed } from '@angular/core/testing';

import { CvServicesService } from './cv-services.service';

describe('CvServicesService', () => {
  let service: CvServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
