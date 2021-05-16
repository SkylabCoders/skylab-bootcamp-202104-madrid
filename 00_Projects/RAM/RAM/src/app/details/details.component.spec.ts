import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsComponent } from './details.component';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing'
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';


const CHARACTER_ARRAY= [{gender: 'male',name:'rick', episode: [0, 1, 2]}, {gender: 'female',name:'beth', episode: [0, 1, 2]}, {gender: 'male',name:'morty', episode: [0, 1, 2]}, {gender: 'female',name:'summer', episode: [0, 1, 2]}]
const prueba = {gender: 'male',name:'rick', episode: [0, 1, 2]};
let ram:any;
let imageRam: any[];
let mockRouter = {
	navigate: jasmine.createSpy('navigate')
}
class MockCharacter {
  public detailsCharacter = CHARACTER_ARRAY;

  public me(): Observable<any> {
       return  of(CHARACTER_ARRAY); 
   }
 }

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let srvMain:MockCharacter;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([
        { path: 'details', component: DetailsComponent}
    ])],
      providers: [DetailsComponent, {
        provide: MockCharacter, useClass: MockCharacter
      }, { provide: Router, useValue: mockRouter},{provide: srvMain, useClass: MockCharacter} ]
    })
    .compileComponents();
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    // srvMain = TestBed.inject(MockCharacter)
    srvMain = TestBed.get(MockCharacter);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});