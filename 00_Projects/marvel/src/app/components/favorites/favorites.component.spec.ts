import { ComponentFixture, TestBed } from '@angular/core/testing'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { MainService } from '../../services/main.service'
import { TranslateService } from '@ngx-translate/core'
import { FavoritesComponent } from './favorites.component'
import {Imarvel} from '../../models/Imarvel'
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('FavoritesComponent', () => {
  let component: FavoritesComponent
  let fixture: ComponentFixture<FavoritesComponent>
  let HttpClient: HttpClient;
  
  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesComponent, HttpClientTestingModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
        { provide: TranslateService, useFactory: translateServiceStub,}
      ]
    })
    .compileComponents();
    HttpClient = TestBed.inject(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
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


  
  it('should return undefined when deleteCharacters is invoked', ()=>{
    let hero:Imarvel ={
      name:'cyclop',
      id:1,
      description:'string',
      selected:true,
      thumbnail:{
          path:'string',
          extension:'string',
      },
      images:{
          path:'string',
          extension:'string',
      }
  
  }
    const spyFn = spyOn(component, 'remove').and.callThrough();
    component.remove(hero);
    expect(component.remove(hero)).toBeFalsy();
  })
