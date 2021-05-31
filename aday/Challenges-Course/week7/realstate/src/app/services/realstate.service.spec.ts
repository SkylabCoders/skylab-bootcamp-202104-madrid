import { HttpClient } from '@angular/common/http'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'

import { RealstateService } from './realstate.service'

describe('RealstateService', () => {
  let service: RealstateService
  let httpMock: HttpTestingController
  let httpClient: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RealstateService]
    })
    service = TestBed.inject(RealstateService)
    httpMock = TestBed.get(HttpTestingController)
    httpClient = TestBed.inject(HttpClient)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
