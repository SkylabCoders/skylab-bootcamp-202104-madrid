import 'zone.js/dist/zone-testing'
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {RouterTestingModule} from '@angular/router/testing'

const CHARACTER_OBJECT= {name:'rick', status: 'alive', gender: 'male'};
class MockCharacter {
   public me(): Observable<any> {
       return  of(CHARACTER_OBJECT); 
   }
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [DashboardComponent, {
        provide:MockCharacter, useClass: MockCharacter
      }, ]
    })
    .compileComponents();
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain an object', ()=>{
    component.goToDetails(CHARACTER_OBJECT);
    const character = CHARACTER_OBJECT;
    expect(character).toEqual(CHARACTER_OBJECT);
  })
});
