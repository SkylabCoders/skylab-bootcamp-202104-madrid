import { Component } from '@angular/core';
import { PipeService } from './services/pipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  operation = {
    dividen: 25,
    divisor: 10
  }
  title = 'pipeexample';
  people = {
    name: 'Musulman',
    age: 33.98765,
    surname: 'Bombastic'
  }
  constructor(private srv:PipeService){

  }
}
