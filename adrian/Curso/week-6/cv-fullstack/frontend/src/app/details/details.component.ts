/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, AfterViewInit {
  refresh$ = new Subject();

  newInfoArray :any;

  fetchCv$!: Observable<any>

  constructor(private httpService:HttpService) { }

  ngOnInit(): void {
    this.fetchCv$ = this.refresh$
      .pipe(
        switchMap(() => this.httpService.getAll())
      );
  }

  ngAfterViewInit() {
    this.refresh$.next();
  }

  updateName(user:any, newInfo:string) {
    const newUserInfo = { ...user, name: newInfo };
    this.httpService.updateCv({ userInfo: newUserInfo })
      .pipe(
        tap(() => this.refresh$.next())
      )
      .subscribe();
  }

  updateExperience(arrayToChange:Array<any>, i:number, newInfo:string) {
    this.newInfoArray = arrayToChange;
    this.newInfoArray[i] = newInfo;
    this.httpService.updateCv({ experience: this.newInfoArray })
      .pipe(
        tap(() => this.refresh$.next())
      )
      .subscribe();
  }

  updateEducation(arrayToChange:Array<any>, i:number, newInfo:string) {
    this.newInfoArray = arrayToChange;
    this.newInfoArray[i] = newInfo;
    this.httpService.updateCv({ education: this.newInfoArray })
      .pipe(
        tap(() => this.refresh$.next())
      )
      .subscribe();
  }

  addEducation(arrayToChange:Array<any>, newInfo:string) {
    this.newInfoArray = arrayToChange;
    this.newInfoArray.push(newInfo);
    this.httpService.updateCv({ education: this.newInfoArray })
      .pipe(
        tap(() => this.refresh$.next())
      )
      .subscribe();
  }

  deleteEducation(arrayToChange:Array<any>, i:number) {
    this.newInfoArray = arrayToChange;
    this.newInfoArray.splice(i, 1);
    this.httpService.updateCv({ education: this.newInfoArray })
      .pipe(
        tap(() => this.refresh$.next())
      )
      .subscribe();
  }

  deleteExperience(arrayToChange:Array<any>, i:number) {
    this.newInfoArray = arrayToChange;
    this.newInfoArray.splice(i, 1);
    this.httpService.updateCv({ experience: this.newInfoArray })
      .pipe(
        tap(() => this.refresh$.next())
      )
      .subscribe();
  }
}
