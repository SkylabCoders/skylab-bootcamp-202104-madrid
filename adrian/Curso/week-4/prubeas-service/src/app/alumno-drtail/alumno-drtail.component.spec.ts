import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoDrtailComponent } from './alumno-drtail.component';

describe('AlumnoDrtailComponent', () => {
  let component: AlumnoDrtailComponent;
  let fixture: ComponentFixture<AlumnoDrtailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoDrtailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoDrtailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
