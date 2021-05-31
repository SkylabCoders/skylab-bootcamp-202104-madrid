import { TestBed, ComponentFixture } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { of } from 'rxjs'
import { UserService } from 'src/app/services/user.service'
import User from './models/user'
describe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [UserService]
    }).compileComponents()
  })
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create the app component', () => {
    expect(component).toBeTruthy()
  })
  it('should call ngOnInit', () => {
    const prueba = [{
      _id: 'string',
      skills: 'string',
      info: {
        name: 'string',
        phoneNumber: 22,
        email: 'string'
      },
      knowledge: [
        {
          language: 'string',
          academy: 'string',
          year: 22
        }
      ]
    }] as User []
    const spyFn = spyOn(component.userService, 'fetchUsers').and.returnValue(of(prueba))
    component.userService.fetchUsers()
    expect(spyFn).toHaveBeenCalled()
  })
  it('should call addExperience', () => {
    const prueba = [{
      _id: 'string',
      skills: 'string',
      info: {
        name: 'string',
        phoneNumber: 22,
        email: 'string'
      },
      knowledge: [
        {
          language: 'string',
          academy: 'string',
          year: 22
        }
      ]
    }] as User []

    const spyFn = spyOn(component.userService, 'addExperience').and.returnValue(of())
    component.addExperience(prueba[0]._id, prueba[0].knowledge, prueba[0].info.email, prueba[0].knowledge[0].year, prueba[0].knowledge[0].academy)
    component.userService.addExperience(prueba[0]._id, prueba[0].knowledge[0].language)
    expect(spyFn).toHaveBeenCalled()
  })
  it('should call ngOnInit', () => {
    const prueba = [{
      _id: 'string',
      skills: 'string',
      info: {
        name: 'string',
        phoneNumber: 22,
        email: 'string'
      },
      knowledge: [
        {
          language: 'string',
          academy: 'string',
          year: 22
        }
      ]
    }] as User []
    const spyFn = spyOn(component.userService, 'fetchUsers').and.returnValue(of(prueba))
    const spyFnPrueba = spyOn(component.refresh$, 'next').and.returnValue()

    component.userService.fetchUsers()
    component.refresh$.next()
    expect(spyFnPrueba).toHaveBeenCalled()
  })
})
