import { TestBed } from '@angular/core/testing'
import { HttpService } from './http.service'
import { HttpClient } from '@angular/common/http'

import { of } from 'rxjs'
describe('HttpService', () => {
  let service: HttpService
  let httpClientSpy: { get: jasmine.Spy }
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    })
    service = TestBed.inject(HttpService)
  })
  it('should be created', () => {
    expect(service).toBeTruthy()
  })
  it('#getheApi should be called', (done) => {
    httpClientSpy.get.and.returnValue(of([]))
    service.fetchApi('hola').subscribe(() => {
      expect(httpClientSpy.get.calls.count()).toBe(1)
      done()
    })
  })
  // it('#getheApiNext should be called', (done) => {
  //   const url = 'www.urlMock.com'
  //   httpClientSpy.get.and.returnValue(of([]))
  //   service.getTheApiNext(url).subscribe(() => {
  //     expect(httpClientSpy.get.calls.count()).toBe(1)
  //     done()
  //   })
  // })
})