/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, AfterViewInit {
  refresh$ = new Subject();

  newInfoArray:Array<any> = []

  fetchCv$!: Observable<any>;

  constructor(public HttpService: HttpService) {}

  ngOnInit(): void {
    this.fetchCv$ = this.refresh$
      .pipe(
        switchMap(() => this.HttpService.fechtCV()),
      );
  }

  ngAfterViewInit() {
    this.refresh$.next();
  }

  updateCvInfo(keyName:String, arrayToChange:Array<any>, i:number, newInfo:string) {
    this.newInfoArray = arrayToChange;
    this.newInfoArray[i] = newInfo;
    switch (keyName) {
      case 'experience':
        this.HttpService.updateCV({ experience: this.newInfoArray })
          .pipe(
            tap(() => this.refresh$.next()),
          )
          .subscribe();
        break;
      case 'skills':
        this.HttpService.updateCV({ skills: this.newInfoArray })
          .pipe(
            tap(() => this.refresh$.next()),
          )
          .subscribe();
        break;
      case 'education':
        this.HttpService.updateCV({ education: this.newInfoArray })
          .pipe(
            tap(() => this.refresh$.next()),
          )
          .subscribe();
        break;
      default:
        break;
    }
  }

  addCvInfo(keyName:String, arrayToChange:Array<any>, newInfo:string) {
    this.newInfoArray = arrayToChange;
    this.newInfoArray.push(newInfo);
    switch (keyName) {
      case 'experience':
        this.HttpService.updateCV({ experience: this.newInfoArray })
          .pipe(
            tap(() => this.refresh$.next()),
          )
          .subscribe();
        break;
      case 'skills':
        this.HttpService.updateCV({ skills: this.newInfoArray })
          .pipe(
            tap(() => this.refresh$.next()),
          )
          .subscribe();
        break;
      case 'education':
        this.HttpService.updateCV({ education: this.newInfoArray })
          .pipe(
            tap(() => this.refresh$.next()),
          )
          .subscribe();
        break;
      default:
        break;
    }
  }

  deleteCvInfo(keyName:String, arrayToChange:Array<any>, i:number) {
    this.newInfoArray = arrayToChange;
    this.newInfoArray.splice(i, 1);
    switch (keyName) {
      case 'experience':
        this.HttpService.updateCV({ experience: this.newInfoArray })
          .pipe(
            tap(() => this.refresh$.next()),
          )
          .subscribe();
        break;
      case 'skills':
        this.HttpService.updateCV({ skills: this.newInfoArray })
          .pipe(
            tap(() => this.refresh$.next()),
          )
          .subscribe();
        break;
      case 'education':
        this.HttpService.updateCV({ education: this.newInfoArray })
          .pipe(
            tap(() => this.refresh$.next()),
          )
          .subscribe();
        break;
      default:
        break;
    }
  }
}
