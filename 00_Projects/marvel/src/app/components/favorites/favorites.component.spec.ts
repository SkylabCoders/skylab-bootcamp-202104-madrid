import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FavoritesComponent } from './favorites.component'

describe('FavoritesComponent', () => {
  let component: FavoritesComponent
  let fixture: ComponentFixture<FavoritesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritesComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
    spyOn(component, 'ngOnInit')

    // it ('should call remove function splice method in remove')
    // spy = spyOn(service, 'redirectToAuth');
    // component.handleLogin();
    // expect(spy).toHaveBeenCalled();
  })
})

// should call the `redirectToAuth` method on the `LoginService`', () => {
//   spy = spyOn(service, 'redirectToAuth');
//   component.handleLogin();
//   expect(spy).toHaveBeenCalled();
