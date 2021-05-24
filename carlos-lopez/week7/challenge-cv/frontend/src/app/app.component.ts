/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import { Observable, Subject } from 'rxjs';
import { OnInit, Component, AfterViewInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
// eslint-disable-next-line import/prefer-default-export
export class AppComponent implements OnInit {
  refresh$ = new Subject();

  fetchCV$!: Observable<any>;

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.fetchCV$ = this.refresh$
      .pipe(
        switchMap(() => this.userService.fetchUsers()),
      );
  }

  ngAfterViewInit() {
    this.refresh$.next();
  }
}
