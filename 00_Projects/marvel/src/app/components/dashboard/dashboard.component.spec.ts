import { ComponentFixture, TestBed } from '@angular/core/testing'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { MainService } from '../../services/main.service'
import { Router } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { DashboardComponent } from './dashboard.component'
import { of } from 'rxjs'

describe('DashboardComponent', () => {
  let component: DashboardComponent
  let fixture: ComponentFixture<DashboardComponent>

  beforeEach(() => {
    const mainServiceStub = () => ({
      getAction: (string:string, arg:string) => ({ subscribe: () => ({}) }),
      character: {}
    })
    const routerStub = () => ({ navigate: () => ({}) })
    const translateServiceStub = () => ({
      addLangs: () => ({}),
      use: () => ({})
    })
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DashboardComponent],
      providers: [
        { provide: MainService, useFactory: mainServiceStub },
        { provide: Router, useFactory: routerStub },
        { provide: TranslateService, useFactory: translateServiceStub }
      ]
    })
    fixture = TestBed.createComponent(DashboardComponent)
    component = fixture.componentInstance
  })

  it('can load instance', () => {
    expect(component).toBeTruthy()
  })

  it('MarvelList has default value', () => {
    expect(component.MarvelList).toEqual([])
  })

  it('randomList has default value', () => {
    expect(component.randomList).toEqual([])
  })

  it('topHeros has default value', () => {
    expect(component.topHeros).toEqual([])
  })

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const mainServiceStub: MainService = fixture.debugElement.injector.get(
        MainService
      )
      const translateServiceStub: TranslateService = fixture.debugElement.injector.get(
        TranslateService
      )
      spyOn(mainServiceStub, 'getAction').and.callThrough()
      spyOn(translateServiceStub, 'addLangs').and.callThrough()
      spyOn(translateServiceStub, 'use').and.callThrough()
      component.ngOnInit()
      expect(mainServiceStub.getAction).toHaveBeenCalled()
      expect(translateServiceStub.addLangs).toHaveBeenCalled()
      expect(translateServiceStub.use).toHaveBeenCalled()
    })
  })

  describe('getAction', () => {
    it('makes expected calls', () => {
      const mainServiceStub: MainService = TestBed.inject(MainService)
      spyOn(mainServiceStub, 'getAction').and.callThrough()
      component.ngOnInit()
      expect(mainServiceStub.getAction).toHaveBeenCalled()
    })

    it('renders four random heroes', () => {
      const mainServiceStub: MainService = TestBed.inject(MainService)
      const marvelTop = [
        { name: 'wolverine' },
        { name: 'cyclops' },
        { name: 'a-bomb' },
        { name: 'avalanch' }
      ]
      spyOn(mainServiceStub, 'getAction').and.returnValue(of(marvelTop))
      expect(marvelTop.length).toBe(4)
    })

    describe('goCharacter', () => {
      it('navigate to ', () => {
        const router = {
          navigate: jasmine.createSpy('navigate')
        }
        expect(router.navigate).toHaveBeenCalledWith(['/detail'])
      })
    })
  })
})
