import { ComponentFixture, TestBed } from '@angular/core/testing'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { MainService } from 'src/app/services/main.service'
import { DetailsComponent } from './details.component'

describe('DetailsComponent', () => {
  let component: DetailsComponent
  let fixture: ComponentFixture<DetailsComponent>

  beforeEach(() => {
    const mainServiceStub = () => ({
      getAction: (string: string, arg: string) => ({ subscribe: () => ({}) })
    })
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DetailsComponent],
      providers: [{ provide: MainService, useFactory: mainServiceStub }]
    })
    fixture = TestBed.createComponent(DetailsComponent)
    component = fixture.componentInstance
  })

  it('can load instance', () => {
    expect(component).toBeTruthy()
  })

  it('hero has default value', () => {
    component.hero = { name: 'ciclops', id: 20 }
    expect(component.hero).toEqual({ name: 'ciclops', id: 20 })
  })

  it('description has default value', () => {
    expect(component.description).toEqual('Description')
  })

  it('comicText has default value', () => {
    expect(component.comicText).toEqual('Comics')
  })

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const mainServiceStub: MainService = fixture.debugElement.injector.get(
        MainService
      )
      spyOn(mainServiceStub, 'getAction').and.callThrough()
      component.ngOnInit()
      expect(mainServiceStub.getAction).toHaveBeenCalled()
    })
  })

  describe('getAction', () => {
    it('makes expected calls', () => {
      const mainServiceStub: MainService = TestBed.inject(MainService)
      spyOn(mainServiceStub, 'getAction').and.callThrough()
      component.ngOnInit()
      expect(mainServiceStub.getAction).toHaveBeenCalled()
    })
  })
})
