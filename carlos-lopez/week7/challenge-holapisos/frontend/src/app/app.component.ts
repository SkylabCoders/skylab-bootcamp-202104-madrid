/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import { HttpService } from './services/http.service'
import { Observable, Subject } from 'rxjs'
import { OnInit, Component, AfterViewInit } from '@angular/core'
import { switchMap, tap } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  refresh$ = new Subject();

  fetchCV$!: Observable<any>;
  constructor (public httpService: HttpService) {}
  title = 'frontend';
  ngOnInit () {
    this.fetchCV$ = this.refresh$
      .pipe(
        switchMap(() => this.httpService.getTheApi())
      )
  }

  ngAfterViewInit () {
    this.refresh$.next()
  }
}
