import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MainService } from '../../services/main.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import {HttpClientTestingModule} from '@angular/common/http/testing'

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    const mainServiceStub = () => ({ userData: {} });
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [LoginComponent],
      providers: [{ provide: TranslatePipe, TranslateService, MainService, useFactory: mainServiceStub }]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
