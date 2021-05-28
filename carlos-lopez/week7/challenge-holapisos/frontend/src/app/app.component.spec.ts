import { TestBed, ComponentFixture } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { HttpService } from './services/http.service'
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
    const fetchFlat$ = {
      info: 'string',
      street: 'string',
      price: 'string',
      img: 'string'
    }
    const spyFn = spyOn(component.httpService, 'getTheApi').and.returnValue(of(fetchFlat$))
    component.chargePage()
    expect(spyFn).toHaveBeenCalled()
  })
  it('getNextPage should be called', () => {
    const fetchFlat$ = {
      info: 'string',
      street: 'string',
      price: 'string',
      img: 'string'
    }
    component.nextUrl = 'ghh'
    const spyFn = spyOn(component.httpService, 'getTheApiNext').and.returnValue(of(fetchFlat$))
    component.getNextPage()
    expect(spyFn).toHaveBeenCalled()
  })
  it('getNextPage should be called', () => {
    const fetchFlat$ = {
      info: 'string',
      street: 'string',
      price: 'string',
      img: 'string'
    }
    component.nextUrl = ''
    const spyFn = spyOn(component.httpService, 'getTheApiNext').and.returnValue(of(fetchFlat$))
    component.getNextPage()
    expect(spyFn).not.toHaveBeenCalled()
  })
})
