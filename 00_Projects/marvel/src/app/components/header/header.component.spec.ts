<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
=======
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { RouterTestingModule } from '@angular/router/testing'
import { HeaderComponent } from './header.component'
>>>>>>> features/project/marvel

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(() => {
    const translateServiceStub = () => ({
      addLangs: () => ({}),
      use: () => ({})
<<<<<<< HEAD
    });
=======
    })
>>>>>>> features/project/marvel
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HeaderComponent],
      providers: [
        { provide: TranslateService, useFactory: translateServiceStub }
      ]
<<<<<<< HEAD
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

=======
    })
    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
  })

  it('can load instance', () => {
    expect(component).toBeTruthy()
  })

>>>>>>> features/project/marvel
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const translateServiceStub: TranslateService = fixture.debugElement.injector.get(
        TranslateService
<<<<<<< HEAD
      );
      spyOn(translateServiceStub, 'addLangs').and.callThrough();
      spyOn(translateServiceStub, 'use').and.callThrough();
      component.ngOnInit();
      expect(translateServiceStub.addLangs).toHaveBeenCalled();
      expect(translateServiceStub.use).toHaveBeenCalled();
    });
  });
});
=======
      )
      spyOn(translateServiceStub, 'addLangs').and.callThrough()
      spyOn(translateServiceStub, 'use').and.callThrough()
      component.ngOnInit()
      expect(translateServiceStub.addLangs).toHaveBeenCalled()
      expect(translateServiceStub.use).toHaveBeenCalled()
    })
  })
})
>>>>>>> features/project/marvel
