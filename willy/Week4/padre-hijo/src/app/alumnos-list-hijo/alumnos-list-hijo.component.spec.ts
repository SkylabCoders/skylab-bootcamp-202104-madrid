import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosListHijoComponent } from './alumnos-list-hijo.component';

describe('AlumnosListHijoComponent', () => {
  let component: AlumnosListHijoComponent;
  let fixture: ComponentFixture<AlumnosListHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosListHijoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosListHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
