import { UserService } from './user.service'
import { HttpClient } from '@angular/common/http'
import { TestBed } from '@angular/core/testing'
import { of } from 'rxjs'

describe('UserService', () => {
  let service: UserService
  let httpClientSpy: {get: jasmine.Spy}

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpClientSpy }]
    })
    service = TestBed.inject(UserService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
  it('getUser should be called', (done) => {
    httpClientSpy.get.and.returnValue(of([]))
    service.fetchUsers().subscribe(() => {
      expect(httpClientSpy.get.calls.count()).toBe(1)
      done()
    })
  })
})
describe('UserService', () => {
  let service: UserService
  let httpClientSpy: {put: jasmine.Spy}

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['put'])
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpClientSpy }]
    })
    service = TestBed.inject(UserService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
  it('getUser should be called', (done) => {
    const id:string = '121212'
    const language:string = 'java'
    httpClientSpy.put.and.returnValue(of({}))
    service.addExperience(id, language).subscribe(() => {
      expect(httpClientSpy.put.calls.count()).toBe(1)
      done()
    })
  })
  it('getUser should be called', (done) => {
    const id:string = '121212'
    const language:string = 'java'
    httpClientSpy.put.and.returnValue(of({}))
    service.deleteExperience(id, language).subscribe(() => {
      expect(httpClientSpy.put.calls.count()).toBe(1)
      done()
    })
  })
  it('getUser should be called', (done) => {
    const id:string = '121212'
    const language:string = 'java'
    httpClientSpy.put.and.returnValue(of({}))
    service.updateExperience(id, language).subscribe(() => {
      expect(httpClientSpy.put.calls.count()).toBe(1)
      done()
    })
  })
})

// it('getUser should be called', (done) => {
//   const url:string = 'httploquesea'
//   httpClientSpy.get.and.returnValue(of({}))
//   service.addExperience(url).subscribe(() => {
//     expect(httpClientSpy.get.calls.count()).toBe(1)
//     done()
//   })
// })
