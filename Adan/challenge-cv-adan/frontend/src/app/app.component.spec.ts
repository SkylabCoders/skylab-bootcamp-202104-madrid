import { TestBed, ComponentFixture } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { UserService } from './services/user.service'
import { of } from 'rxjs'
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [HttpClientTestingModule],
      providers: [
        UserService
      ]
    }).compileComponents()
  })
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })
  it('should create', () => {
    expect(component).toBeTruthy()
  })
  it('should create', () => {
    const prueba = [{
      _id: 'string',
      skills: 'string',
      info: {
        name: 'string',
        phoneNumber: 612221553,
        email: 'string'
      },
      knowledge:
            {
              language: 'string',
              academy: 'string',
              year: 2021
            }
    }]
    const spyFn = spyOn(component.userService, 'addExperience').and.returnValue(of())
    // const spyFnPipe = spyOn(component.refresh$, 'next').and.callThrough()
    component.addExperience(prueba[0]._id, prueba[0].knowledge, prueba[0].info.email, prueba[0].knowledge.year, prueba[0].knowledge.academy)
    component.userService.addExperience(prueba[0]._id, prueba[0].knowledge.language)
    expect(spyFn).toHaveBeenCalled()
  })
})
