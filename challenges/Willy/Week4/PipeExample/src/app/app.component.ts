import { Component } from '@angular/core';
import { TraduccionService } from './services/traduccion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  operation = {
    dividendo:25,
    divisor:5
  }

  constructor(public srv:TraduccionService){}

  title = 'PipeExample';
  people = {
    name: 'pepe',
    age: 40,
    surname: "GARCIA"
  }
}
