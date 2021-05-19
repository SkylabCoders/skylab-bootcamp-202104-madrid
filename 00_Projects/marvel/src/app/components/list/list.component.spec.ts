import { ComponentFixture, TestBed } from '@angular/core/testing'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { MainService } from 'src/app/services/main.service'
import { Imarvel } from '../../models/Imarvel'
import { TranslateService } from '@ngx-translate/core'
import { Router } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { ListComponent } from './list.component'
describe('ListComponent', () => {
  let component: ListComponent
  let fixture: ComponentFixture<ListComponent>
  beforeEach(() => {
    const mainServiceStub = () => ({
      getAction: (string:string, arg:string) => ({ subscribe: () => ({}) }),
      favorites: {},
      character: {}
    })
    const translateServiceStub = () => ({
      addLangs: () => ({}),
      use: () => ({})
    })
    const routerStub = () => ({ navigate: () => ({}) })
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ListComponent],
      providers: [
        { provide: MainService, useFactory: mainServiceStub },
        { provide: TranslateService, useFactory: translateServiceStub },
        { provide: Router, useFactory: routerStub }
      ]
    })
    fixture = TestBed.createComponent(ListComponent)
    component = fixture.componentInstance
  })
  it('can load instance', () => {
    expect(component).toBeTruthy()
  })
  it('marvelList has default value', () => {
    expect(component.marvelList).toEqual([])
  })
  it('favoriteList has default value', () => {
    expect(component.favoriteList).toEqual([])
  })
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const mainServiceStub: MainService = fixture.debugElement.injector.get(
        MainService
      )
      const translateServiceStub: TranslateService = fixture.debugElement.injector.get(
        TranslateService
      )
      spyOn(component, 'parseData').and.callThrough()
      spyOn(mainServiceStub, 'getAction').and.callThrough()
      spyOn(translateServiceStub, 'addLangs').and.callThrough()
      spyOn(translateServiceStub, 'use').and.callThrough()
      component.ngOnInit()
      expect(component.parseData).toHaveBeenCalled()
      expect(mainServiceStub.getAction).toHaveBeenCalled()
      expect(translateServiceStub.addLangs).toHaveBeenCalled()
      expect(translateServiceStub.use).toHaveBeenCalled()
    })
  })
})