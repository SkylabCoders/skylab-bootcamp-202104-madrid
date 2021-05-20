import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwCharactersComponent } from './sw-characters.component';

describe('SwCharactersComponent', () => {
  let component: SwCharactersComponent;
  let fixture: ComponentFixture<SwCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
