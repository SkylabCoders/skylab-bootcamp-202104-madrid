import { TestBed } from '@angular/core/testing';
import { MainService } from './main.service';
 import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
 import { HttpClient } from '@angular/common/http';

describe('MainService', () => {
  let service: MainService;
   let httpMock: HttpTestingController;
   let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
       imports: [HttpClientTestingModule],
       providers: [MainService]
    });
    service = TestBed.inject(MainService);
     httpMock = TestBed.get(HttpTestingController);
     httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
