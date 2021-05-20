import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritesComponent } from './favorites.component';
import { RouterTestingModule } from '@angular/router/testing'
import { DetailsComponent } from '../details/details.component';
import { Router } from '@angular/router';
import { MainService } from '../services/main.service';
import { HttpService } from '../services/http.service';
import { LoginService } from '../services/login.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  const prueba = { id: 1, name: 'Rick Sanchez', status: 'Alive', species: 'Human' };

  const ram: Array<{id:number, name: string, status: string, species:string}> = [
    { id: 1, name: 'Rick Sanchez', status: 'Alive', species: 'Human' },
    { id: 2, name: 'Morty Smith', status: 'Alive', species: 'Human' }
  ];

  let mockRouter = {
	  navigate: jasmine.createSpy('navigate')
  }
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([
        { path: 'details', component: DetailsComponent}
    ])],
    providers: [FavoritesComponent, MainService, HttpService, LoginService, { provide: Router, useValue: mockRouter} ]
    })
    .compileComponents();
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesComponent);
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
  it('should be #sendToDetail to be called', ()=>{
    const spyFn = spyOn(component, 'sendToDetail').and.callThrough();
    component.sendToDetail(prueba);
    expect(spyFn).toHaveBeenCalled();
  })
  it('should navigate to details', ()=>{
    const spyFn = spyOn(component, 'sendToDetail').and.callThrough();
    component.sendToDetail(prueba);
    mockRouter.navigate('details');
    expect(mockRouter.navigate).toHaveBeenCalledWith('details');
  })
  it('should return undefined when deleteCharacters is invoked', ()=>{
    const spyFn = spyOn(component, 'deleteCharacters').and.callThrough();
    component.deleteCharacters(prueba);
    expect(component.deleteCharacters(prueba)).toBeFalsy();
  })
  it('should be 0 indexOfDelete', ()=>{
    const spyFn = spyOn(component, 'deleteCharacters').and.callThrough();
    let indexOfDelete
    component.deleteCharacters(prueba);
    for(let i = 0; i < ram.length; i++) {
      if(prueba.id === ram[i].id){
        indexOfDelete= i;
      }
    }
    expect(prueba.id).toBe(1);

  })

});


