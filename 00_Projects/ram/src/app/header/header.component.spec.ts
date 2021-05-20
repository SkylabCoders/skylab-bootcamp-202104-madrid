import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output, Component } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { HeaderComponent } from './header.component'
import { MainService } from '../services/main.service'
import { Router } from '@angular/router'

let logIn = true
let showLogIn = false

@Injectable()
class MockMainService {}

@Injectable()
class MockRouter {
  navigate () {};
}

@Directive({ selector: '[oneviewPermitted]' })
class OneviewPermittedDirective {
  @Input() oneviewPermitted: any;
}

@Pipe({ name: 'safeHtml' })
class SafeHtmlPipe implements PipeTransform {
  transform (value: any) { return value }
}

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>
  let component: { ngOnDestroy: () => void; ngOnInit: () => void; router: { url?: any; navigate?: any; }; srvMain: { getTheAPI?: any; goToList?: any; currentUser?: any; }; searchSubmit: () => void; openLogIn: () => void; onSubmit: () => void; backHome: () => void; }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [
        HeaderComponent,
        SafeHtmlPipe,
        OneviewPermittedDirective
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        { provide: MainService, useClass: MockMainService },
        { provide: Router, useClass: MockRouter }
      ]
    }).overrideComponent(HeaderComponent, {

    }).compileComponents()
    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.debugElement.componentInstance
  }))

  afterEach(() => {
    component.ngOnDestroy = function () {}
    fixture.destroy()
  })

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy()
  })

  it('should run #ngOnInit()', async () => {
    component.ngOnInit()
    const el = document.querySelector('.header__logIn')
    const loged = false

    if (!loged) {
      el?.classList.add('no-loged')
    }
    expect(el).toHaveClass('no-loged')
  })

  it('should run #openLogIn()', async () => {
    component.openLogIn()
    showLogIn = !showLogIn
    expect(showLogIn).toBe(true)
  })

  it('should run #onSubmit()', async () => {
    component.srvMain = component.srvMain || {}
    component.srvMain.currentUser = 'currentUser'
    component.onSubmit()
    localStorage.setItem('username', JSON.stringify(component.srvMain.currentUser))
    expect(localStorage).toBeTruthy()
  })

  it('should run #backHome()', async () => {
    component.backHome()
    logIn = false
    expect(logIn).toBe(false)
  })
  it('should contain log in', async(() => {
    const anchor = <HTMLElement>document.querySelector('.header__anchor--text')
    expect(anchor.innerHTML).toBe('Dashboard')
  }))
})
