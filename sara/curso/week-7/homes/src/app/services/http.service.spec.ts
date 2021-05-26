import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;
  let httpClientSpy: { get: jasmine.Spy };
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpClientSpy },
      ],
    });
    service = TestBed.inject(HttpService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('#getheApi should be called', (done) => {
    const url = 'fakeURL'
    httpClientSpy.get.and.returnValue(of([]));
    service.getAll(url).subscribe(() => {
      expect(httpClientSpy.get.calls.count()).toBe(1);
      done();
    });
  });
});
