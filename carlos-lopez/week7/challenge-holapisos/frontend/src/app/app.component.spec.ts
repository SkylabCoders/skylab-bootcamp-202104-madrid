import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { HttpService } from './services/http.service'
import { HttpClient } from '@angular/common/http'
import { defer, Observable } from 'rxjs'

describe('AppComponent', () => {
  let service: HttpService
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = new HttpService(httpClientSpy as any)
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        AppComponent,
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    }).compileComponents()
    service = TestBed.inject(HttpService)
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  //   it('should return expected heroes (HttpClient called once)', (done) => {
  //     const fixture = TestBed.createComponent(AppComponent)
  //     const app = fixture.componentInstance
  //     app.chargePage()
  //     service.getTheApi()
  //     expect(app.chargePage).toHaveBeenCalled()
  //   })
  it('should return expected heroes (HttpClient called once)', (done: DoneFn) => {
    const expectedHeroes =
      [{ id: 1, name: 'A' }, { id: 2, name: 'B' }]
    httpClientSpy.get.and.returnValue(function asyncData<T> (expectedHeroes:any) {
      return defer(() => Promise.resolve(expectedHeroes))
    })
    service.getTheApi().subscribe(
      heroes => {
        expect(heroes).toEqual(expectedHeroes, 'expected heroes')
        done()
      },
      done.fail
    )
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call')
  })
})
