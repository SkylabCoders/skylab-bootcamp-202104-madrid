import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RealstateService } from 'src/app/services/realstate.service'
import { HttpClient } from '@angular/common/http'
import { RealstateComponent } from './realstate.component'

describe('RealstateComponent', () => {
  let component: RealstateComponent
  let fixture: ComponentFixture<RealstateComponent>
  let httpMock: HttpTestingController
  let httpClient: HttpClient
  const realState = RealstateService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RealstateComponent],
      imports: [HttpClientTestingModule],
      providers: [RealstateComponent, RealstateService]
    })
      .compileComponents()
    httpMock = TestBed.get(HttpTestingController)
    httpClient = TestBed.inject(HttpClient)
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(RealstateComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should call ngOnInit function', () => {
    const spyFn = spyOn(component, 'ngOnInit').and.callThrough()
    component.ngOnInit()
    expect(spyFn).toHaveBeenCalled()
  })

  it('should call chargePage function', () => {
    const spyFn = spyOn(component, 'chargePage').and.callThrough()
    component.chargePage()
    expect(spyFn).toHaveBeenCalled()
  })
})
