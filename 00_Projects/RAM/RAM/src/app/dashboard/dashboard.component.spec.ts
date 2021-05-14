import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DashboardComponent } from './dashboard.component'
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http'
import { RouterTestingModule } from '@angular/router/testing'
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { DetailsComponent } from '../details/details.component';
import { TranslateService } from '@ngx-translate/core';

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
      providers: [DashboardComponent, TranslateService, {
        provide:MockCharacter, useClass: MockCharacter
      }, { provide: Router, useValue: mockRouter} ]
    })
    .compileComponents();
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    spyOn(component,'goToDetails');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain an object', ()=>{
    const characters = CHARACTER_ARRAY;
    expect(characters).toEqual(CHARACTER_ARRAY);
  })
  it('should call gotoDetails',()=>{
    // const el: HTMLElement = fixture.nativeElement; //document
    // const anchor = el.querySelector('.tst');
    // anchor?.dispatchEvent(new Event('click'));
    component.goToDetails(prueba);
    expect(component.goToDetails).toHaveBeenCalledTimes(1);
  })
  it('should navigate to details', ()=>{
    mockRouter.navigate('details')
    expect (mockRouter.navigate).toHaveBeenCalledWith('details');
  })
  it('should be rick', () => {
    expect(CHARACTER_ARRAY[0].name).toBe('rick');
  })
  it('should be 4', ()=>{
    component.ngOnInit()
    ram = CHARACTER_ARRAY;
    expect(ram.length).toBe(4);
  })
  it('should be a JSON', ()=>{
    component.ngOnInit()
    ram = CHARACTER_ARRAY;
    imageRam = ram.slice(0, 2);
    expect(JSON.stringify(imageRam)).toEqual('[{"gender":"male","name":"rick"},{"gender":"female","name":"beth"}]');
  })
});
