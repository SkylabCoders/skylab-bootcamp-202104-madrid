import { ComponentFixture, TestBed, tick } from '@angular/core/testing'
import { HttpService } from '../services/http.service'
import { CardsComponent } from './cards.component'

describe('CardsComponent', () => {
  let component: CardsComponent
  let fixture: ComponentFixture<CardsComponent>
  let service: HttpService
  let spy:any

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should call ngOnInit using http.service', () => {
    fixture.componentInstance.ngOnInit()
    tick()
    fixture.detectChanges()
    expect(component.ngOnInit).toHaveBeenCalled()
  }
  )
})
