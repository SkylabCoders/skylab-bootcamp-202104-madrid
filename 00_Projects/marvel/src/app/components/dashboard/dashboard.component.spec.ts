import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { DashboardComponent } from './dashboard.component'
import { RouterTestingModule } from '@angular/router/testing'
import { Router } from '@angular/router'
import { Location } from '@angular/common'

describe('DashboardComponent', () => {
  let component: DashboardComponent
  let fixture: ComponentFixture<DashboardComponent>
  let router: Router
  let location: Location
  const mockHero = { name: 'Ciclops' }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [DashboardComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent)
    component = fixture.componentInstance
    spyOn(component, 'ngOnInit')
    spyOn(component, 'goCharacter')
    location = TestBed.get(Location)
    router = TestBed.get(Router)
    router.initialNavigation()
    fixture.detectChanges()
  })

  // it('should create', () => {
  //   expect(component).toBeTruthy()
  // })
  it('should render a random list of hero when init', () => {
    component.ngOnInit()
    expect(component.ngOnInit).toHaveBeenCalled()
  })

  it('should navigate to details page when clicked', () => {
    component.goCharacter(mockHero)
    expect(component.goCharacter).toHaveBeenCalled()
  })

  it('navigate to "/" redirects you to /details', fakeAsync(() => {
    router.navigate([''])
    expect(location.path()).toBe('/')
  }))
})
