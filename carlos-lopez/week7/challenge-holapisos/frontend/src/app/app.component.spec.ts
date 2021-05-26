import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { HttpService } from './services/http.service'
import { HttpClient } from '@angular/common/http'
import { of } from 'rxjs'

describe('AppComponent', () => {
  let service: HttpService
  let httpServiceSpy: {getTheApi: jasmine.Spy}
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    httpServiceSpy = jasmine.createSpyObj('HttpService', ['getTheApi'])
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: HttpClient, useValue: httpClientSpy },
        { provide: HttpService, useValue: httpServiceSpy }
      ]
    }).compileComponents()
    service = TestBed.inject(HttpService)
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })
  it('On init should be triggered', (done) => {
    const component = TestBed.inject(AppComponent)
    component.ngOnInit()
    httpClientSpy.get.and.returnValue(of([]))
    service.getTheApi().subscribe(() => {
      expect(httpClientSpy.get.calls.count()).toBe(1)
      done()
    })
    expect(component.chargePage).toHaveBeenCalled()
  })
  //   it('On init chargePage should be called', ())

  //   it('should have as title \'frontend\'', () => {
  //     const fixture = TestBed.createComponent(AppComponent)
  //     const app = fixture.componentInstance
  //     expect(app.title).toEqual('frontend')
  //   })

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent)
//     fixture.detectChanges()
//     const compiled = fixture.nativeElement
//     expect(compiled.querySelector('.content span').textContent).toContain('frontend app is running!')
//   })
})
