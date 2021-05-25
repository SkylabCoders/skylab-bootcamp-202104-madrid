import { Component, OnInit, AfterViewInit } from '@angular/core'
import { switchMap, tap } from 'rxjs/operators'
import { Observable, Subject } from 'rxjs'
import CvService from '../app/services/cv.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  refresh$ = new Subject();
  getAllCvs$!: Observable<any>

  constructor (public cvService: CvService) {}

  ngOnInit () {
    this.getAllCvs$ = this.refresh$
      .pipe(
        switchMap(() => this.cvService.getAllCvs())
      )
  }

  ngAfterViewInit () {
    this.refresh$.next()
  }

  delete (dni: number) {
    this.cvService.deleteCv(dni)
      .pipe(
        tap(() => this.refresh$.next())
      )
      .subscribe()
  }
}
