import { TestBed } from '@angular/core/testing'
import { HttpService } from './http.service'
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http'

const url = 'https://rickandmortyapi.com/api/character?page=1'

describe('HttpService', () => {
  let service: HttpService
  let httpMock: HttpTestingController
  let httpClient: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService]
    })
    service = TestBed.inject(HttpService)
    httpMock = TestBed.get(HttpTestingController)
    httpClient = TestBed.inject(HttpClient)
    spyOn(service, 'getAPI')
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should call getAPI', () => {
    service.getAPI(url)
    expect(service.getAPI).toHaveBeenCalled()
  })
})
