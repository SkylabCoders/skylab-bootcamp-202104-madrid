import { ComponentFixture, TestBed } from '@angular/core/testing'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { HolapisosService } from '../services/holapisos.service'
import { CardComponent } from './card.component'

describe('CardComponent', () => {
  let component: CardComponent
  let fixture: ComponentFixture<CardComponent>

  beforeEach(() => {
    const holapisosServiceStub = () => ({
      getData: () => ({ subscribe: () => ({ unsubscribe: () => ({}) }) })
    })
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CardComponent],
      providers: [
        { provide: HolapisosService, useFactory: holapisosServiceStub }
      ]
    })
    fixture = TestBed.createComponent(CardComponent)
    component = fixture.componentInstance
  })

  it('Can load instance', () => {
    expect(component).toBeTruthy()
  })

  it('Currency has default value', () => {
    expect(component.currency).toEqual('€')
  })

  describe('ngOnInit', () => {
    it('Makes expected calls', () => {
      spyOn(component, 'fetch').and.callThrough()
      component.ngOnInit()
      expect(component.fetch).toHaveBeenCalled()
    })
  })

  describe('nextPage', () => {
    it('Makes expected calls', () => {
      const holapisosServiceStub: HolapisosService = fixture.debugElement.injector.get(
        HolapisosService
      )
      spyOn(holapisosServiceStub, 'getData').and.callThrough()
      component.nextPage()
      expect(holapisosServiceStub.getData).toHaveBeenCalled()
    })
  })

  describe('previousPage', () => {
    it('Makes expected calls', () => {
      const holapisosServiceStub: HolapisosService = fixture.debugElement.injector.get(
        HolapisosService
      )
      spyOn(component, 'ngOnInit').and.callThrough()
      spyOn(holapisosServiceStub, 'getData').and.callThrough()
      component.previousPage()
      expect(component.ngOnInit).toHaveBeenCalled()
      expect(holapisosServiceStub.getData).toHaveBeenCalled()
    })
  })
})
