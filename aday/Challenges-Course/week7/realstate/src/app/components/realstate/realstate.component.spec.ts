import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealstateComponent } from './realstate.component';

describe('RealstateComponent', () => {
  let component: RealstateComponent;
  let fixture: ComponentFixture<RealstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealstateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
