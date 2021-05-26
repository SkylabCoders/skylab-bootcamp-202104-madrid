import { TestBed, ComponentFixture } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { of } from 'rxjs'
import { UserService } from 'src/app/services/user.service'
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
})
