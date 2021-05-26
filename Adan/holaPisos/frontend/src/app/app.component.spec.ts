import { Component } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { HttpService } from './service/http.service'

describe('AppComponent', () => {
  let comp: Component
  beforeEach(() => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      providers: [
        AppComponent,
        { provide: HttpService }
      ]
    })
    // inject both the component and the dependent service.
    comp = TestBed.inject(AppComponent)
    httpService = TestBed.inject(HttpService)
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it('should have as title \'frontend\'', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('frontend')
  })

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.nativeElement
    expect(compiled.querySelector('.content span').textContent).toContain('frontend app is running!')
  })
})
