import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsComponent } from './details.component';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';

const CHARACTER_ARRAY= [{gender: 'male',name:'rick', episode: [0, 1]}, {gender: 'female',name:'beth', episode: [0, 1]}, {gender: 'male',name:'morty', episode: [0, 1]}, {gender: 'female',name:'summer', episode: [0, 1]}]
const prueba = {gender: 'male',name:'rick', episode:[0, 1]};
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
      }
      ]
    })
    .compileComponents();
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
     expect(component).toBeTruthy();
   });
  
  it('should change fontWeight', ()=>{
    const favouriteStar: HTMLElement | any = document.querySelector('.fav');
    let isInFavorites = true;
    if(isInFavorites && favouriteStar){
      favouriteStar.style.fontWeight = 'bold';
    }
    expect(favouriteStar.style.fontWeight).toBe('bold');
  })
});