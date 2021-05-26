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

  updatePersonalInfo(propierty: string, user:any, newInfo:string) {
    let newUserInfo;
    switch (propierty) {
      case 'name':
        newUserInfo = { ...user, name: newInfo };
        this.httpService.updateCv({ userInfo: newUserInfo })
          .pipe(
            tap(() => this.refresh$.next())
          )
          .subscribe();
        break;
      case 'mail':
        newUserInfo = { ...user, mail: newInfo };
        this.httpService.updateCv({ userInfo: newUserInfo })
          .pipe(
            tap(() => this.refresh$.next())
          )
          .subscribe();
        break;
      default:
        break;
    }
  }

  add(propierty: string, arrayToChange:Array<any>, newInfo:string) {
    switch (propierty) {
      case 'ex':
        this.newInfoArray = arrayToChange;
        this.newInfoArray.push(newInfo);
        this.httpService.updateCv({ experience: this.newInfoArray })
          .pipe(
            tap(() => this.refresh$.next())
          )
          .subscribe();
        break;
      case 'ed':
        this.newInfoArray = arrayToChange;
        this.newInfoArray.push(newInfo);
        this.httpService.updateCv({ education: this.newInfoArray })
          .pipe(
            tap(() => this.refresh$.next())
          )
          .subscribe();
        break;
      default:
        break;
    }
  }

  update(propierty: string, arrayToChange:Array<any>, i:number, newInfo: string) {
    switch (propierty) {
      case 'ex':
        this.newInfoArray = arrayToChange;
        this.newInfoArray[i] = newInfo;
        this.httpService.updateCv({ education: this.newInfoArray })
          .pipe(
            tap(() => this.refresh$.next())
          )
          .subscribe();
        break;
      case 'ed':
        this.newInfoArray = arrayToChange;
        this.newInfoArray[i] = newInfo;
        this.httpService.updateCv({ education: this.newInfoArray })
          .pipe(
            tap(() => this.refresh$.next())
          )
          .subscribe();
        break;
      default:
        break;
    }
  }

  delete(iterado: string, arrayToChange:Array<any>, i:number) {
    switch (iterado) {
      case 'ex':
        this.newInfoArray = arrayToChange;
        this.newInfoArray.splice(i, 1);
        this.httpService.updateCv({ experience: this.newInfoArray })
          .pipe(
            tap(() => this.refresh$.next())
          )
          .subscribe();
        break;
      case 'ed':
        this.newInfoArray = arrayToChange;
        this.newInfoArray.splice(i, 1);
        this.httpService.updateCv({ education: this.newInfoArray })
          .pipe(
            tap(() => this.refresh$.next())
          )
          .subscribe();
        break;
      default:
        break;
    }
  }
}
