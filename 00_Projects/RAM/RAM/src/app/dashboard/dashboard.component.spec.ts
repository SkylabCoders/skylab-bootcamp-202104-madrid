import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DashboardComponent } from './dashboard.component'
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http'
import { RouterTestingModule } from '@angular/router/testing'
import { Observable, of } from 'rxjs';
import { DetailsComponent } from '../details/details.component'
const CHARACTER_ARRAY= [{gender: 'male',name:'rick'}, {gender: 'female',name:'beth'}, {gender: 'male',name:'morty'}, {gender: 'female',name:'summer'}]
let ram:any;
let imageRam: any[];
class MockCharacter {
  public me(): Observable<any> {
       return  of(CHARACTER_ARRAY); 
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
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([
        { path: 'details', component: DetailsComponent}
    ])],
      providers: [DashboardComponent, {
        provide:MockCharacter, useClass: MockCharacter
      } ]
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
    component.goToDetails(CHARACTER_ARRAY);
    const characters = CHARACTER_ARRAY;
    expect(characters).toEqual(CHARACTER_ARRAY);
  })
  it('should be rick', () => {
    expect(CHARACTER_ARRAY[0].name).toBe('rick');
  })
  it('should be 4', ()=>{
    component.ngOnInit()
    ram = CHARACTER_ARRAY;
    expect(ram.length).toBe(4);
  })
  it('should be 2', ()=>{
    component.ngOnInit()
    ram = CHARACTER_ARRAY;
    imageRam = ram.slice(0, 2);
    expect(imageRam).toContain("[ Object({ gender: 'male', name: 'rick' }), Object({ gender: 'female', name: 'beth' }) ]");
  })
});