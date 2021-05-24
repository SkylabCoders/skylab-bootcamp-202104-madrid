/* eslint-disable import/prefer-default-export */
import { AfterViewInit, Component, OnInit } from '@angular/core'
import { Observable, Subject } from 'rxjs'
import { CvService } from './service/cv.service'

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

  }

  ngAfterViewInit () {

  }
}
