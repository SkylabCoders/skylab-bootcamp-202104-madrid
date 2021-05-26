import { HttpService } from './http.service'
import { HttpClient } from '@angular/common/http'
import { TestBed } from '@angular/core/testing'
import { of } from 'rxjs'

describe('HttpService', () => {
  let service: HttpService
  let httpClientSpy: {get: jasmine.Spy}

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpClientSpy }]
    })
    service = TestBed.inject(HttpService)
  })
  it('should be created', () => {
    expect(service).toBeTruthy()
  })
  it('getUser should be called', (done) => {
    httpClientSpy.get.and.returnValue(of({}))
    service.getApi().subscribe(() => {
      expect(httpClientSpy.get.calls.count()).toBe(1)
      done()
    })
  })
  it('getUser should be called', (done) => {
    const url:string = 'httploquesea'
    httpClientSpy.get.and.returnValue(of({}))
    service.getApiMostrar(url).subscribe(() => {
      expect(httpClientSpy.get.calls.count()).toBe(1)
      done()
    })
  })
})
