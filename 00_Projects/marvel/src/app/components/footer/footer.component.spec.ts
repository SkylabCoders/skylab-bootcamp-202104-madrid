import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    const translateServiceStub = () => ({
      addLangs: () => ({}),
      use: () => ({})
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [FooterComponent],
      providers: [
        { provide: TranslateService, useFactory: translateServiceStub }
      ]
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`author has default value`, () => {
    expect(component.author).toEqual(`The Thirties`);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const translateServiceStub: TranslateService = fixture.debugElement.injector.get(
        TranslateService
      );
      spyOn(translateServiceStub, 'addLangs').and.callThrough();
      spyOn(translateServiceStub, 'use').and.callThrough();
      component.ngOnInit();
      expect(translateServiceStub.addLangs).toHaveBeenCalled();
      expect(translateServiceStub.use).toHaveBeenCalled();
    });
  });
});
