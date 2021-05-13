import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ListComponent } from './list.component'
import { of } from 'rxjs'
// import { HttpClient } from '@angular/common/http'
import { HttpClientTestingModule } from '@angular/common/http/testing'
// import { MainService } from '../../services/main.service'

const MarvelMock = {
  name: 'Cyclops'

}

class Mockmarvel {
  getData (MarvelMock:any) {
    return of(MarvelMock)
  }
}

describe('ListComponent', () => {
  let component: ListComponent
  let fixture: ComponentFixture<ListComponent>

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
    fixture.detectChanges()
  })

  it('should contain an object with string', () => {
    expect(MarvelMock.name).toBe('Cyclops')
  })
})
