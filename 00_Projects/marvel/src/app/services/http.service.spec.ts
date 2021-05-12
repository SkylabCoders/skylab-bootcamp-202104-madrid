import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { HttpService } from './http.service'
import { HttpClient } from '@angular/common/http'

describe('HttpService', () => {
  let service: HttpService
  let httpClient: HttpClient
  let httpMock: HttpTestingController
  let mockMarvel:any
  let mockUrl:any

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService]
    })
    service = TestBed.inject(HttpService)
    httpMock = TestBed.get(HttpTestingController)
    httpClient = TestBed.inject(HttpClient)
  })

  mockUrl = 'https://gateway.marvel.com:443/v1/public/characters?name=cyclops&apikey=15e7eedc86b57ed8c9aa86e4c26e4a2b'

  it('should be created', () => {
    mockMarvel = { name: 'cyclops' }
    service.getData(mockUrl).subscribe((res:any) => {
      expect(res).toEqual(mockMarvel)
    })
  })
})
