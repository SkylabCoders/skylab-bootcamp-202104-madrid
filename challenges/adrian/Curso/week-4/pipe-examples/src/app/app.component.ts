import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe-examples';
  person = {
    name:'adrian',
    surname: 'ruano',
    number: 3.123456789,
  }
  operation = {
    dividend : 25,
    divisor: 5,
  }
}
