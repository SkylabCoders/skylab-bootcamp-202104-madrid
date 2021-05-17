import { ComponentFixture, TestBed } from '@angular/core/testing'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { OptionsComponent } from './options.component'
describe('OptionsComponent', () => {
  let component: OptionsComponent
  let fixture: ComponentFixture<OptionsComponent>
  beforeEach(() => {
    const translateServiceStub = () => ({
      addLangs: () => ({}),
      setDefaultLang: () => ({}),
      use: () => ({})
    })
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [OptionsComponent],
      providers: [
        { provide: TranslateService, useFactory: translateServiceStub }
      ]
    })
    fixture = TestBed.createComponent(OptionsComponent)
    component = fixture.componentInstance
  })
  it('can load instance', () => {
    expect(component).toBeTruthy()
  })
  it('title has default value', () => {
    expect(component.title).toEqual('Lenguages')
  })
  it('english has default value', () => {
    expect(component.english).toEqual('English')
  })
  it('spanish has default value', () => {
    expect(component.spanish).toEqual('Spanish')
  })
})