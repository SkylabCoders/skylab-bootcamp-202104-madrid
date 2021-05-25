/* eslint-disable import/prefer-default-export */
import { AfterViewInit, Component, OnInit } from '@angular/core'
import { Observable, Subject } from 'rxjs'
import { CvService } from './service/cv.service'
import { switchMap, tap } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  refresh$ = new Subject();

  fetchCv$!: Observable<any>;

  // eslint-disable-next-line no-useless-constructor
  constructor (public cvService: CvService) {}

  ngOnInit () {
    this.fetchCv$ = this.refresh$
      .pipe(
        switchMap(() => this.cvService.fetchCv())
      )
  }

  ngAfterViewInit () {
    this.refresh$.next()
  }

  addCv (value:string) {
    this.cvService.postCv(value)
      .pipe(
        tap(() => this.refresh$.next())
      ).subscribe()
  }

  // updateExperience(id:string,)
}
