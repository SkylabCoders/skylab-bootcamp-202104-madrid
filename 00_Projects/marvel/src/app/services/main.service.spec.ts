import { TestBed } from '@angular/core/testing'
import { HttpClient } from '@angular/common/http'
import { MainService } from './main.service'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

describe('MainService', () => {
  let service: MainService
  let mockMarvel:any
  let mockUrl:any
  let action:any
  let httpClient:HttpClient
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MainService]
    })
    service = TestBed.inject(MainService)
    httpClient = TestBed.inject(HttpClient)
    httpMock = TestBed.get(HttpTestingController)
  })

  it('should be an Object', () => {
    action = 'getList'
    mockUrl = 'https://gateway.marvel.com:443/v1/public/characters?name=cyclops&apikey=15e7eedc86b57ed8c9aa86e4c26e4a2b'
    mockMarvel = { name: 'cyclops' }
    service.getAction(action, mockUrl).subscribe((res:any) => {
      expect(res).toEqual(mockMarvel)
    })
  })
})
