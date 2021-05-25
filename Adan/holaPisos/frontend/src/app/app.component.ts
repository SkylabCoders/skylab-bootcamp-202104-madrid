/* eslint-disable no-useless-constructor */
import { Component } from '@angular/core'
import { HttpService } from './service/http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor (public httpService: HttpService) { }
}
