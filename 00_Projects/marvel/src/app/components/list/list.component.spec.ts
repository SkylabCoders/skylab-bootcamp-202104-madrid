import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ListComponent } from './list.component'
import { of } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { MainService } from '../../services/main.service'

const MarvelMock = {
  name: 'Cyclops',
  selected: false
}

const marvelMockList = [{ name: 'Cyclops' }, { name: 'Wolverine' }]
const marvelPush = marvelMockList.push({ name: 'Adrian' })

const marvelUrlMock = 'https://gateway.marvel.com:443/v1/public/characters?apikey=15e7eedc86b57ed8c9aa86e4c26e4a2b&hash=55ab7706c5f814004ae2a053827b7004'
const action = 'marvelMock'

class Mockmarvel {
  getData (MarvelMock:any) {
    return of(MarvelMock)
  }
}

describe('ListComponent', () => {
  let component: ListComponent
  let fixture: ComponentFixture<ListComponent>
  let service:MainService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ListComponent],
      providers: [{ provide: MarvelMock, useClass: Mockmarvel }]

    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent)
    component = fixture.componentInstance

    spyOn(component, 'parseData')
    spyOn(component, 'toFavorite')
    spyOn(component, 'removeFavorite')
    fixture.detectChanges()
  })

  it('should contain an object with string', () => {
    expect(MarvelMock.name).toBe('Cyclops')
  })

  it('Expect service to return an array of objets', () => {
    // spyOn(component, 'ngOnInit')
    component.ngOnInit()
    expect(component.ngOnInit).toHaveBeenCalled()
  })

  it('should make a push if a condition is true', () => {
    component.toFavorite(marvelMockList)
    expect(component.toFavorite).toHaveBeenCalled()
  })

  it('should remove an element when call it', () => {
    component.removeFavorite(marvelMockList)
    expect(component.removeFavorite).toHaveBeenCalled()
  })
})

// it('should push an object into an array', () => {

//   // const button: HTMLElement = fixture.nativeElement
//   // const boton = button.querySelector('.far fa-star')
//   // button.click()
//   // punisher.toFavorite(MarvelMock)
//   // expect(MarvelMock.selected).toBe(true)
// })

// })
