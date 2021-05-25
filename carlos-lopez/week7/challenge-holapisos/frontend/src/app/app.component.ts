/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import { HttpService } from './services/http.service'
import { OnInit, Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  fetchFlat$: any;
  constructor (public httpService: HttpService) {}
  title = 'frontend';
  ngOnInit () {
    this.httpService.getTheApi().subscribe((res) => {
      this.fetchFlat$ = res
    })
  }
}
