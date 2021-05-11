import { ComponentFixture, TestBed } from '@angular/core/testing'

// import { HttpService } from '../../services/http.service'
import { ListComponent } from './list.component'
import { of } from 'rxjs'
// import { HttpClient } from '@angular/common/http'
import { NO_ERRORS_SCHEMA } from '@angular/core'

const MarvelMock = {
  name: 'Cyclops'

}

class Mockmarvel {
  getData (MarvelMock:any) {
    return of(MarvelMock)
  }
}
>>>>>>> 929b7a3a34e50595a69ff948d92e359184787d1a

describe('ListComponent', () => {
  let component: ListComponent
  let fixture: ComponentFixture<ListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [ListComponent]
=======
      declarations: [ListComponent],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      providers: [{ provide: MarvelMock, useClass: Mockmarvel }]
>>>>>>> 929b7a3a34e50595a69ff948d92e359184787d1a
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
<<<<<<< HEAD
=======
  it('should contain an object with string', () => {
    const document = HTMLElement = fixture.nativeElement
    const tag = document.querySelector('.main-container__list')
    const name = document.querySelector('.main-container__list-name')
    console.log(name)
    expect(name?.textContent).toContain('Cyclops')
  })
>>>>>>> 929b7a3a34e50595a69ff948d92e359184787d1a
})
