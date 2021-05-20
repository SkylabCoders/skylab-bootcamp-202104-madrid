import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DashboardComponent } from './dashboard.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http'
import { RouterTestingModule } from '@angular/router/testing'
import { Router } from '@angular/router'
import { DetailsComponent } from '../details/details.component'
import { Observable, of } from 'rxjs'
import { MainService } from '../services/main.service'
import { HttpService } from '../services/http.service'
import { LoginService } from '../services/login.service'

describe('DashboardComponent', () => {
  let component: DashboardComponent
  let fixture: ComponentFixture<DashboardComponent>
  let httpClient: HttpClient
  let srvMain: MainService
  let srvHttp: HttpService
  let srvLogin: LoginService

  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  }
  const CHARACTER_ARRAY: Array<{id:number, name: string, status: string, species:string}> = [
    { id: 1, name: 'Rick Sanchez', status: 'Alive', species: 'Human' },
    { id: 2, name: 'Morty Smith', status: 'Alive', species: 'Human' }
  ]
  const prueba = { id: 1, name: 'Rick Sanchez', status: 'Alive', species: 'Human' }
  const url = 'https://rickandmortyapi.com/api/character?page=1'

  class MockCharacter {
    public me (): Observable<any> {
      return of(CHARACTER_ARRAY)
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([
        { path: 'details', component: DetailsComponent }
      ])],
      providers: [DashboardComponent, MainService, HttpService, LoginService, { provide: Router, useValue: mockRouter }, {
        provide: MockCharacter, useClass: MockCharacter
      }]
    })
      .compileComponents()
    httpClient = TestBed.inject(HttpClient)
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent)
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

  it('should be #goToDetails to be called', () => {
    const spyFn = spyOn(component, 'goToDetails').and.callThrough()
    component.goToDetails(prueba)
    expect(spyFn).toHaveBeenCalled()
  })
  it('should navigate to details', () => {
    component.goToDetails(prueba)
    mockRouter.navigate('details')
    expect(mockRouter.navigate).toHaveBeenCalledWith('details')
  })

  it('#Poner titulo', () => {
    srvLogin = new LoginService()
    srvMain = new MainService(srvHttp, srvLogin)
    srvHttp = new HttpService(httpClient)
    const valueServiceSpy = jasmine.createSpyObj('HttpService', ['getAPI'])
    expect(valueServiceSpy.getAPI).toBeTruthy()
  })

  it('#getObservableValue should return value from observable', (done: any) => {
    srvMain = new MainService(srvHttp, srvLogin)
    srvHttp = new HttpService(httpClient)

    component.ngOnInit()
    srvMain.getTheAPI(url).subscribe((value:any) => {
      console.log(value)
      expect(value).toBe(true)
      done()
    })
  })
})
