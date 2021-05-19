import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    const translateServiceStub = () => ({
      addLangs: () => ({}),
      setDefaultLang: () => ({}),
      use: () => ({})
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent],
      providers: [
        { provide: TranslateService, useFactory: translateServiceStub }
      ]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`title has default value`, () => {
    expect(component.title).toEqual(`marvel`);
  });

  it(`testLang has default value`, () => {
    expect(component.testLang).toEqual(`i18n`);
  });
});
