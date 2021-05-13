import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsComponent } from './details.component';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing'
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

const CHARACTER_ARRAY= [{gender: 'male',name:'rick'}, {gender: 'female',name:'beth'}, {gender: 'male',name:'morty'}, {gender: 'female',name:'summer'}]
const prueba = {gender: 'male',name:'rick'};
let ram:any;
let imageRam: any[];
let mockRouter = {
	navigate: jasmine.createSpy('navigate')
}
class MockCharacter {
  public me(): Observable<any> {
       return  of(CHARACTER_ARRAY); 
   }
 }

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([
        { path: 'details', component: DetailsComponent}
    ])],
      providers: [DetailsComponent, {
        provide:MockCharacter, useClass: MockCharacter
      }, { provide: Router, useValue: mockRouter} ]
    })
    .compileComponents();
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    spyOn(component,'getUrl');
    spyOn(component,'checkFavorites');
    spyOn(component,'addIt');
    spyOn(component,'deletIt');
    spyOn(component,'changeFavicon');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should call gotoDetails',()=>{
    component.checkFavorites();
    expect(component.checkFavorites).toHaveBeenCalled();
  })

});