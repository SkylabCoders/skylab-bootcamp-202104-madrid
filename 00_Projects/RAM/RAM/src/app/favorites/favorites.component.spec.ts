import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritesComponent } from './favorites.component';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing'
import { DetailsComponent } from '../details/details.component'
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

const CHARACTER_ARRAY= [{gender: 'male',name:'rick'}, {gender: 'female',name:'beth'}, {gender: 'male',name:'morty'}, {gender: 'female',name:'summer'}]
const prueba = {
  gender: 'male',
  name:'rick', 
  info:{next: 'https://rickandmortyapi.com/api/character?page=4', prev:'https://rickandmortyapi.com/api/character?page=2'}
};
let indexOfDelete:any
let ram:any;
let imageRam: any[];
let url ='https://rickandmortyapi.com/api/character?page=1'
let mockRouter = {
	navigate: jasmine.createSpy('navigate')
}
class MockCharacter {
  public me(): Observable<any> {
       return  of(CHARACTER_ARRAY); 
   }
 }

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([
        { path: 'details', component: DetailsComponent}
    ])],
    providers: [FavoritesComponent, {
      provide:MockCharacter, useClass: MockCharacter
    }, { provide: Router, useValue: mockRouter} ]
    })
    .compileComponents();
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component,'sendToDetail');
    spyOn(component,'deleteCharacters');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call sendToDetail',()=>{
    component.sendToDetail(prueba);
    expect(component.sendToDetail).toHaveBeenCalled();
  })

  it('should call delete',()=>{
    component.deleteCharacters(prueba);
    expect(component.deleteCharacters).toHaveBeenCalled();
  })

  it('should navigate to details', ()=>{
    mockRouter.navigate('details')
    expect (mockRouter.navigate).toHaveBeenCalledWith('details');
  })

  it('should navigate to details', ()=>{
    component.deleteCharacters(prueba)
    expect(indexOfDelete).toBeFalsy();
  })

});
