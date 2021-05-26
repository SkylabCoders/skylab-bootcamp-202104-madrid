/* eslint-disable import/prefer-default-export */
import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {

  url = `https://apidev.holapisos.com/es/api/node/inmuebles?page%5Boffset%5D=0&page%5Blimit%5D=32&sort%5Bweight%5D%5Bpath%5D=field_inmu_peso_orde&sort%5Bweight%5D%5Bdirection%5D=DESC&sort%5Brelevancy%5D%5Bpath%5D=relevancy&sort%5Brelevancy%5D%5Bdirection%5D=DESC&fields%5Bnode--inmuebles%5D=field_inmu_imag_arra%2Cfield_inmu_prec%2Cfield_inmu_nume_habi%2Cfield_inmu_refe%2Cfield_inmu_pobl%2Cfield_inmu_area_cons%2Cfield_inmu_tipo_sin_agru%2Cfield_inmu_tipo_via%2Cfield_inmu_nomb_call`
  houses: Array<any> = []
  housesForPagination:any;

  constructor(private httpService:HttpService) {}

  ngOnInit() {
    this.paint(this.url);
  }

  paint(url:string) {
    this.httpService.getAll(url).subscribe((res:any) => {
      this.housesForPagination = res;
      res.data.forEach((element:any) => {
        this.houses.push(element)
      });
      console.log(typeof this.houses[0].attributes.field_inmu_prec)
      console.log(res.data)
    });
  }

  loadMore() {
      this.url = this.housesForPagination.links.next.href;
      this.paint(this.url);
    
  }
}
