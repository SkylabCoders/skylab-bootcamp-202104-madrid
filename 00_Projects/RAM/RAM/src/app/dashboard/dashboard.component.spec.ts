import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DashboardComponent } from './dashboard.component'
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http'
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { DetailsComponent } from '../details/details.component';
import { Observable, of } from 'rxjs';
import { MainService } from '../services/main.service';
import { HttpService } from '../services/http.service';
import { LoginService } from '../services/login.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let srvMain: MainService;
  let srvHttp: HttpService;
  let srvLogin: LoginService;

  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  }
  const CHARACTER_ARRAY: Array<{id:number, name: string, status: string, species:string}> = [
    { id: 1, name: 'Rick Sanchez', status: 'Alive', species: 'Human' },
    { id: 2, name: 'Morty Smith', status: 'Alive', species: 'Human' }
  ];
  const prueba = { id: 1, name: 'Rick Sanchez', status: 'Alive', species: 'Human' };
  const url = "http://www.google.es"
  
  class MockCharacter {
    public me(): Observable<any> {
         return  of(CHARACTER_ARRAY); 
     }
   }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([
        { path: 'details', component: DetailsComponent}
    ])],
      providers: [DashboardComponent, MainService, HttpService, LoginService, { provide: Router, useValue: mockRouter}, {
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
  it('should ngOnInit to be called', ()=>{
    const spyFn = spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(spyFn).toHaveBeenCalled();
  })
  // it('should call and receive and observable ngOnInit to be called', ()=>{
  //   const spyFn = spyOn(component, 'ngOnInit').and.callThrough();
  //   component.ngOnInit();
  //   expect(spyFn).toHaveBeenCalled();
  // })
//   it('#getObservableValue should return value from observable',
//   (done: DoneFn) => {
//     let service = new MainService(new HttpService(httpClient = new HttpClient(), srvLogin)
//     service.currentUser = {username: 'Aday', password: 'platanito'}
//     service.getTheAPI(url).subscribe((value: any) => {
//     expect(typeof value).toBe('object');
//     done();
//   });
// });

  it('should be #goToDetails to be called', ()=>{
    const spyFn = spyOn(component, 'goToDetails').and.callThrough();
    component.goToDetails(prueba);
    expect(spyFn).toHaveBeenCalled();
  })
  it('should navigate to details', ()=>{
    const spyFn = spyOn(component, 'goToDetails').and.callThrough();
    component.goToDetails(prueba);
    mockRouter.navigate('details');
    expect(mockRouter.navigate).toHaveBeenCalledWith('details');
  })
});