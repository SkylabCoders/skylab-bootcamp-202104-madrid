import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';

describe('AppComponent', () => {
  let service: HttpService;
  let comp: AppComponent;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        AppComponent
      ]
    });
    service = TestBed.inject(HttpService);
    comp = TestBed.inject(AppComponent)
  });

  

});
