import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsComponent } from './details.component';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing'


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
      providers: [DetailsComponent]
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
});