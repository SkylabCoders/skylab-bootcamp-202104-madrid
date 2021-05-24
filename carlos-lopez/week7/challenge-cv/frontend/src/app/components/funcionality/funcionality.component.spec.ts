import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionalityComponent } from './funcionality.component';

describe('FuncionalityComponent', () => {
  let component: FuncionalityComponent;
  let fixture: ComponentFixture<FuncionalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
