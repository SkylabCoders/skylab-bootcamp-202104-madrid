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

  callHttpService(newInfo:object) {
    this.HttpService.updateCV(newInfo)
      .pipe(
        tap(() => this.refresh$.next()),
      )
      .subscribe();
  }

  updateCvInfo(keyName:String, arrayToChange:Array<any>, i:number, newInfo:string) {
    this.newInfoArray = arrayToChange;
    this.newInfoArray[i] = newInfo;
    switch (keyName) {
      case 'experience':
        this.callHttpService({ experience: this.newInfoArray });
        break;
      case 'skills':
        this.callHttpService({ skills: this.newInfoArray });
        break;
      case 'education':
        this.callHttpService({ education: this.newInfoArray });
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
        this.callHttpService({ experience: this.newInfoArray });
        break;
      case 'skills':
        this.callHttpService({ skills: this.newInfoArray });
        break;
      case 'education':
        this.callHttpService({ education: this.newInfoArray });
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
        this.callHttpService({ experience: this.newInfoArray });
        break;
      case 'skills':
        this.callHttpService({ skills: this.newInfoArray });
        break;
      case 'education':
        this.callHttpService({ education: this.newInfoArray });
        break;
      default:
        break;
    }
  }

  updateCvUserInfo(property:string, obj : Object, propertyValue: string) {
    let newUserInfo;
    let name;
    let mail;
    let phone;
    switch (property) {
      case 'name':
        name = propertyValue;
        newUserInfo = { ...obj, name };
        this.callHttpService({ userInfo: newUserInfo });
        break;
      case 'mail':
        mail = propertyValue;
        newUserInfo = { ...obj, mail };
        this.callHttpService({ userInfo: newUserInfo });
        break;
      case 'phone':
        phone = propertyValue;
        newUserInfo = { ...obj, phone };
        this.callHttpService({ userInfo: newUserInfo });
        break;
      default:
        break;
    }
  }
}
