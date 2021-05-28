import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { HolapisosService } from './holapisos.service'
import { HttpClient } from '@angular/common/http'
describe('HolapisosService', () => {
  let service: HolapisosService
  let httpClient: HttpClient
  let httpMock: HttpTestingController
  let mockUrl: string
  let mockList: object
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HolapisosService]
    })
    service = TestBed.inject(HolapisosService)
    httpMock = TestBed.get(HttpTestingController)
    httpClient = TestBed.inject(HttpClient)
  })
  mockUrl = 'https://apidev.holapisos.com/es/api/node/inmuebles?page%5Boffset%5D=0&page%5Blimit%5D=32&sort%5Bweight%5D%5Bpath%5D=field_inmu_peso_orde&sort%5Bweight%5D%5Bdirection%5D=DESC&sort%5Brelevancy%5D%5Bpath%5D=relevancy&sort%5Brelevancy%5D%5Bdirection%5D=DESC&fields%5Bnode--inmuebles%5D=field_inmu_imag_arra%2Cfield_inmu_prec%2Cfield_inmu_nume_habi%2Cfield_inmu_refe%2Cfield_inmu_pobl%2Cfield_inmu_area_cons%2Cfield_inmu_tipo_sin_agru%2Cfield_inmu_tipo_via%2Cfield_inmu_nomb_call%22'
  it('should call the api a return a res', () => {
    mockList = { field_inmu_tip_via: 'calle' }
    service.getData(mockUrl).subscribe((res:any) => {
      expect(res).toEqual(mockList)
    })
  })
})
