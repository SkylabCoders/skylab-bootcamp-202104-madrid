import { ComponentFixture, TestBed } from '@angular/core/testing'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { MainService } from '../../services/main.service'
import { TranslateService } from '@ngx-translate/core'
import { FavoritesComponent } from './favorites.component'

describe('FavoritesComponent', () => {
  let component: FavoritesComponent
  let fixture: ComponentFixture<FavoritesComponent>

  beforeEach(() => {
    const mainServiceStub = () => ({})
    const translateServiceStub = () => ({
      addLangs: () => ({}),
      use: () => ({})
    })
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [FavoritesComponent],
      providers: [
        { provide: MainService, useFactory: mainServiceStub },
        { provide: TranslateService, useFactory: translateServiceStub }
      ]
    })
    fixture = TestBed.createComponent(FavoritesComponent)
    component = fixture.componentInstance
  })

  it('can load instance', () => {
    expect(component).toBeTruthy()
  })

  it('imgSrc has default value', () => {
    expect(component.imgSrc).toEqual(
      'https://trello-attachments.s3.amazonaws.com/6098e25224d83a589028906f/430x653/88f99a970ccc135d7d17c5fa248dbb70/stan_lee.png'
    )
  })

  it('title has default value', () => {
    expect(component.title).toEqual('Your favorite list')
  })

  it('yourFavorites has default value', () => {
    expect(component.yourFavorites).toEqual([])
  })

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const translateServiceStub: TranslateService = fixture.debugElement.injector.get(
        TranslateService
      )
      spyOn(translateServiceStub, 'addLangs').and.callThrough()
      spyOn(translateServiceStub, 'use').and.callThrough()
      component.ngOnInit()
      expect(translateServiceStub.addLangs).toHaveBeenCalled()
      expect(translateServiceStub.use).toHaveBeenCalled()
    })
  })
})