import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpService } from './services/http.service'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'prueba-tecnica'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('prueba-tecnica');
  });

  it('Should call onInit', ()=>{
    ngOnInit();
    expect(fetchApi()).toHaveBeencalled()
  });

});
