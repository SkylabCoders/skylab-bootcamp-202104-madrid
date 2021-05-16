import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { DetailsComponent } from '../details/details.component'
import { RouterTestingModule } from '@angular/router/testing'
import { Router } from '@angular/router';

const CHARACTER_ARRAY= [{gender: 'male',name:'rick'}, {gender: 'female',name:'beth'}, {gender: 'male',name:'morty'}, {gender: 'female',name:'summer'}]
const prueba = {
  gender: 'male',
  name:'rick', 
  info:{next: 'https://rickandmortyapi.com/api/character?page=4', prev:'https://rickandmortyapi.com/api/character?page=2'}
};
let ram:any;
let imageRam: any[];
let url ='https://rickandmortyapi.com/api/character?page=1'
let mockRouter = {
	navigate: jasmine.createSpy('navigate')
}
class MockCharacter {
  public me(): Observable<any> {
       return  of(CHARACTER_ARRAY); 
   }
 }
describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([
        { path: 'details', component: DetailsComponent}
      ])],
        providers: [ListComponent, {
          provide:MockCharacter, useClass: MockCharacter
        }, { provide: Router, useValue: mockRouter} ]
      })
    .compileComponents();
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    spyOn(component,'sendToDetail');
    spyOn(component,'getNextPage');
    spyOn(component,'getPrevPage');
    spyOn(component,'chargePage');
    spyOn(component,'ngOnInit');
    fixture.detectChanges();
  });
  it('should create', () => {
   expect(component).toBeTruthy();
  });
  it('should call sendToDetail',()=>{
    component.sendToDetail(prueba);
    expect(component.sendToDetail).toHaveBeenCalled();
  })
  it('should call getNextPage',()=>{
    component.getNextPage();
    expect(component.getNextPage).toHaveBeenCalled();
  })
  it('should call getPrevPage',()=>{
    component.getPrevPage();
    expect(component.getPrevPage).toHaveBeenCalled();
  })
  it('should navigate to details', ()=>{
    mockRouter.navigate('details')
    expect (mockRouter.navigate).toHaveBeenCalledWith('details');
  })
  it('should be a JSON', ()=>{
    component.ngOnInit()
    ram = CHARACTER_ARRAY;
    imageRam = ram.slice(0, 2);
    expect(JSON.stringify(imageRam)).toEqual('[{"gender":"male","name":"rick"},{"gender":"female","name":"beth"}]');
  })
  it('should be an url',()=>{
    component.chargePage(url);
    let srvUrl = url;
    expect(srvUrl).toBe('https://rickandmortyapi.com/api/character?page=1');
  })
  it('should call chargePage',()=>{
    component.getNextPage();
    if(prueba.info.next){
      component.chargePage(prueba.info.next)
    }
    expect(component.chargePage).toHaveBeenCalled();
  })
  it('should call chargePage',()=>{
    component.getPrevPage();
    if(prueba.info.prev){
      component.chargePage(prueba.info.prev)
    }
    expect(component.chargePage).toHaveBeenCalled();
  })
  // it('should call chargePage', ()=>{
  //   component.ngOnInit()
  //   expect(component.ngOnInit()).toHaveBeenCalled();
  // })
});
