import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HeaderComponent } from './header.component'
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http'
import { RouterTestingModule } from '@angular/router/testing'
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { ListComponent } from '../list/list.component'
import { LoadingListComponent } from '../loading-list/loading-list.component'
import { FormsModule } from '@angular/forms';

const CHARACTER_ARRAY= [{gender: 'male',name:'rick'}, {gender: 'female',name:'beth'}, {gender: 'male',name:'morty'}, {gender: 'female',name:'summer'}]
const prueba = {gender: 'male',name:'rick'};
class MockCharacter {
  public me(): Observable<any> {
       return  of(CHARACTER_ARRAY); 
   }
 }
let mockRouter = {
	navigate: jasmine.createSpy('navigate')
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, RouterTestingModule.withRoutes([
        { path: 'ListComponent', component: ListComponent},
        { path:'LoadingListComponent', component: LoadingListComponent}
    ])],
    providers: [HeaderComponent, {
      provide:MockCharacter, useClass: MockCharacter
    }, { provide: Router, useValue: mockRouter} ]
  })
      .compileComponents()
      httpMock = TestBed.get(HttpTestingController)
      httpClient = TestBed.inject(HttpClient)
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    spyOn(component,'searchSubmit');
    spyOn(component,'openLogIn');
    spyOn(component,'onSubmit');
    spyOn(component,'backHome');
    component = fixture.componentInstance
    fixture.detectChanges();
    spyOn(component, 'openLogIn');
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  });
  it('should contain an object',()=>{
    const characters = CHARACTER_ARRAY;
    expect(characters).toEqual(CHARACTER_ARRAY)
  });
  it('should navigate to loadingList',()=>{
    mockRouter.navigate('loadingList')
    expect (mockRouter.navigate).toHaveBeenCalledWith('loadingList')
  });
  it('should navigate to list',()=>{
    mockRouter.navigate('list')
    expect (mockRouter.navigate).toHaveBeenCalledWith('loadingList')
  });
  it('should call searchSubmit',()=>{
    component.searchSubmit;
    expect(component.searchSubmit).toHaveBeenCalled
  });
  it('should call openLogin', () => {
    component.openLogIn();
    expect(component.openLogIn).toHaveBeenCalled();
  })
})
