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
      providers: [HeaderComponent],
      declarations: [HeaderComponent]
    })
      .compileComponents()
      httpMock = TestBed.get(HttpTestingController)
      httpClient = TestBed.inject(HttpClient)
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges();
    spyOn(component, 'openLogIn');
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should call openLogin', () => {
    component.openLogIn();
    expect(component.openLogIn).toHaveBeenCalled();
  })
})
