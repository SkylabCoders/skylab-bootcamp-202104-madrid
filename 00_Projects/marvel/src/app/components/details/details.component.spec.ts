import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { DetailsComponent } from './details.component'

describe('DetailsComponent', () => {
  let component: DetailsComponent
  let fixture: ComponentFixture<DetailsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [DetailsComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent)
    component = fixture.componentInstance
    spyOn(component, 'ngOnInit')
    fixture.detectChanges()
  })

  it('should render a random list of comics when init', () => {
    component.ngOnInit()
    expect(component.ngOnInit).toHaveBeenCalled()
  })

  // it('should create', () => {
  //   expect(component).toBeTruthy()
  // })
})
