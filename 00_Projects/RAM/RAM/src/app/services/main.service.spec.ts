import { TestBed } from '@angular/core/testing';
import { MainService } from './main.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

const url = "https://rickandmortyapi.com/api/character?page=1"

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
     spyOn(service, 'getTheAPI');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getTheAPI', () => {
    service.getTheAPI(url);
    expect(service.getTheAPI).toHaveBeenCalled();
  });
});
