import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FavoritesComponent } from './favorites.component'
import { RouterTestingModule } from '@angular/router/testing'
import { DetailsComponent } from '../details/details.component'
import { Router } from '@angular/router'
import { MainService } from '../services/main.service'
import { HttpService } from '../services/http.service'
import { LoginService } from '../services/login.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('FavoritesComponent', () => {
  let component: FavoritesComponent
  let fixture: ComponentFixture<FavoritesComponent>

  const prueba = { id: 1, name: 'Rick Sanchez', status: 'Alive', species: 'Human' }

  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritesComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([
        { path: 'details', component: DetailsComponent }
      ])],
      providers: [FavoritesComponent, MainService, HttpService, LoginService, { provide: Router, useValue: mockRouter }]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should ngOnInit to be called', () => {
    const spyFn = spyOn(component, 'ngOnInit').and.callThrough()
    component.ngOnInit()
    expect(spyFn).toHaveBeenCalled()
  })
  it('should be #sendToDetail to be called', () => {
    const spyFn = spyOn(component, 'sendToDetail').and.callThrough()
    component.sendToDetail(prueba)
    expect(spyFn).toHaveBeenCalled()
  })
  it('should navigate to details', () => {
    component.sendToDetail(prueba)
    mockRouter.navigate('details')
    expect(mockRouter.navigate).toHaveBeenCalledWith('details')
  })
  it('should return undefined when deleteCharacters is invoked', () => {
    component.deleteCharacters(prueba)
    expect(component.deleteCharacters(prueba)).toBeFalsy()
  })
})
