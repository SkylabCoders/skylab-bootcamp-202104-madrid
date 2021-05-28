import { TestBed, ComponentFixture } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { HttpService } from './service/http.service'
import { of } from 'rxjs'
import { HttpClientTestingModule } from '@angular/common/http/testing'
describe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [HttpClientTestingModule],
      providers: [
        HttpService
      ]
    }).compileComponents()
  })
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })
  it('should create', () => {
    expect(component).toBeTruthy()
  })
  it('#chargePage should be called', () => {
    const fetch = {
      info: 'string',
      street: 'string',
      price: 'string',
      img: 'string'
    }
    const spyFn = spyOn(component.httpService, 'getApi').and.returnValue(of(fetch))
    component.chargePage()
    expect(spyFn).toHaveBeenCalled()
  })
  it('getNextPage should be called', () => {
    const fetch = {
      info: 'string',
      street: 'string',
      price: 'string',
      img: 'string'
    }
    component.nextUrl = 'www.mock.com'
    const spyFn = spyOn(component.httpService, 'getApiMostrar').and.returnValue(of(fetch))
    component.showMore()
    expect(spyFn).toHaveBeenCalled()
  })
  it('getNextPage should be called', () => {
    const fetch = {
      info: 'string',
      street: 'string',
      price: 'string',
      img: 'string'
    }
    component.nextUrl = ''
    const spyFn = spyOn(component.httpService, 'getApiMostrar').and.returnValue(of(fetch))
    component.showMore()
    expect(spyFn).not.toHaveBeenCalled()
  })
})
