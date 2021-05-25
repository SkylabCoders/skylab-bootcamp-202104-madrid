/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import { Observable, Subject } from 'rxjs';
import { OnInit, Component, AfterViewInit } from '@angular/core';
import { switchMap, tap } from 'rxjs/operators';
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

  jobPosition = 'Full Stack Developer';

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

  addExperience(
    id:string, knowledgeArr:any, valueExp:string, valueYear: any, valueAcademy:any,
  ) {
    const myArr = knowledgeArr;
    myArr.push({
      language: valueExp,
      academy: valueAcademy,
      year: valueYear,
    });
    console.log(myArr);
    this.userService.addExperience(id, myArr)
      .pipe(
        tap(() => this.refresh$.next()),
      )
      .subscribe();
  }

  delete(id: string) {
    this.userService.deleteUser(id)
      .pipe(
        tap(() => this.refresh$.next()),
      )
      .subscribe();
  }

  update(id: string, skills: string) {
    if (!skills.trim()) {
      return;
    }
    this.userService.updateExperience(id, skills)
      .pipe(
        tap(() => this.refresh$.next()),
      )
      .subscribe();
  }
}
