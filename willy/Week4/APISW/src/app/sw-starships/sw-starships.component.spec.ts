import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwStarshipsComponent } from './sw-starships.component';

describe('SwStarshipsComponent', () => {
  let component: SwStarshipsComponent;
  let fixture: ComponentFixture<SwStarshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwStarshipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwStarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
