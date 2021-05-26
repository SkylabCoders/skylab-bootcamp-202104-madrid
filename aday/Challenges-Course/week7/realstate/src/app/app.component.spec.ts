import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing'
import { RealstateService } from './services/realstate.service'
import { HttpClient } from '@angular/common/http'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

describe('AppComponent', () => {
  let component: AppComponent
  let httpClient: HttpClient
  let httpMock: HttpTestingController
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        AppComponent,
        RealstateService
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents()
    httpMock = TestBed.get(HttpTestingController)
    httpClient = TestBed.inject(HttpClient)
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it('should have as title \'realstate\'', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('realstate')
  })

  /* it('should render app children tag', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.nativeElement
    expect(component).toMatch('<app-realstate></app-realstate>')
  }) TO DO */
})
