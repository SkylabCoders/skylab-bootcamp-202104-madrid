/* eslint-disable import/no-unresolved */
import { TestBed } from '@angular/core/testing'
import { HttpClient } from '@angular/common/http'
import { UserService } from './user.service'
import { of } from 'rxjs'

describe('UserService', () => {
  let service: UserService
  let httpClientSpy: {get: jasmine.Spy, put: jasmine.Spy}
  const id = 'string'
  const language = 'string'
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'put'])
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpClientSpy }]
    })
    service = TestBed.inject(UserService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
  it('#fetchUsers should be call .get', (done) => {
    httpClientSpy.get.and.returnValue(of({}))
    service.fetchUsers().subscribe(() => {
      expect(httpClientSpy.get.calls.count()).toBe(1)
      done()
    })
  })
  it('#addExperience should be call .put', (done) => {
    httpClientSpy.put.and.returnValue(of({}))
    service.addExperience(id, language).subscribe(() => {
      expect(httpClientSpy.put.calls.count()).toBe(1)
      done()
    })
  })
  it('#deleteExperience should be call .put', (done) => {
    httpClientSpy.put.and.returnValue(of({}))
    service.deleteExperience(id, language).subscribe(() => {
      expect(httpClientSpy.put.calls.count()).toBe(1)
      done()
    })
  })
  it('#updateExperience should be call .put', (done) => {
    httpClientSpy.put.and.returnValue(of({}))
    service.updateExperience(id, language).subscribe(() => {
      expect(httpClientSpy.put.calls.count()).toBe(1)
      done()
    })
  })
})
