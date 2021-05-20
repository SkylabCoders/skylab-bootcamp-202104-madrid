import { Component, OnInit } from '@angular/core';
import{ ComunicationService} from '../service/comunication.service'
@Component({
  selector: 'app-alumno-drtail',
  templateUrl: './alumno-drtail.component.html',
  styleUrls: ['./alumno-drtail.component.css']
})
export class AlumnoDrtailComponent implements OnInit {
  value:any;
  constructor(public srv:ComunicationService) { }

  ngOnInit(): void {
  }
  getValueFromService(): void{
    this.value = this.srv.alumno;
    console.log('holi' + this.value)
  }
}
