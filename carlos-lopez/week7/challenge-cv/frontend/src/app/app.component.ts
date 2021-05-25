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
    this.userService.addExperience(id, myArr)
      .pipe(
        tap(() => this.refresh$.next()),
      )
      .subscribe();
  }

  delete(id: string, knowledgeArr:any, i:any) {
    const myArr = knowledgeArr;
    myArr.splice(i, 1);
    this.userService.deleteExperience(id, myArr)
      .pipe(
        tap(() => this.refresh$.next()),
      )
      .subscribe();
  }

  updateLanguage(id: string, knowledgeArr:any, i:any, skills: string) {
    if (!skills.trim()) {
      return;
    }
    const myArr = knowledgeArr;
    myArr[i].language = skills;
    this.userService.updateExperience(id, myArr)
      .pipe(
        tap(() => this.refresh$.next()),
      )
      .subscribe();
  }

  updateAcademy(id: string, knowledgeArr:any, i:any, skills: any) {
    if (!skills.trim()) {
      return;
    }
    const myArr = knowledgeArr;
    myArr[i].academy = skills;
    this.userService.updateExperience(id, myArr)
      .pipe(
        tap(() => this.refresh$.next()),
      )
      .subscribe();
  }

  updateYear(id: string, knowledgeArr:any, i:any, skills: any) {
    if (!skills.trim()) {
      return;
    }
    const myArr = knowledgeArr;
    myArr[i].year = skills;
    this.userService.updateExperience(id, myArr)
      .pipe(
        tap(() => this.refresh$.next()),
      )
      .subscribe();
  }
}
