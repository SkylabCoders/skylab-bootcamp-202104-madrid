/* eslint-disable no-useless-constructor */
import { Observable, Subject } from 'rxjs'
import { OnInit, Component, AfterViewInit } from '@angular/core'
import { switchMap, tap } from 'rxjs/operators'
import { UserService } from './services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  refresh$ = new Subject();

  fetchCV$!: Observable<any>;

  jobPosition = 'Full Stack Developer';

  constructor (public userService: UserService) {}

  ngOnInit () {
    this.fetchCV$ = this.refresh$
      .pipe(
        switchMap(() => this.userService.fetchUsers())
      )
  }

  ngAfterViewInit () {
    this.refresh$.next()
  }

  addExperience (
    id:string, knowledgeArray:any, valueExp:string, valueYear: any, valueAcademy:any
  ) {
    const newKnowledgeArray = knowledgeArray
    newKnowledgeArray.push({
      language: valueExp,
      academy: valueAcademy,
      year: valueYear
    })
    this.userService.addExperience(id, newKnowledgeArray)
      .pipe(
        tap(() => this.refresh$.next())
      )
      .subscribe()
  }

  delete (id: string, knowledgeArray:any, i:any) {
    const newKnowledgeArray = knowledgeArray
    newKnowledgeArray.splice(i, 1)
    this.userService.deleteExperience(id, newKnowledgeArray)
      .pipe(
        tap(() => this.refresh$.next())
      )
      .subscribe()
  }

  updateLanguage (id: string, knowledgeArray:any, i:any, skills: string) {
    const newKnowledgeArray = knowledgeArray
    newKnowledgeArray[i].language = skills
    this.userService.updateExperience(id, newKnowledgeArray)
      .pipe(
        tap(() => this.refresh$.next())
      )
      .subscribe()
  }

  updateAcademy (id: string, knowledgeArray:any, i:any, skills: any) {
    const newKnowledgeArray = knowledgeArray
    newKnowledgeArray[i].academy = skills
    this.userService.updateExperience(id, newKnowledgeArray)
      .pipe(
        tap(() => this.refresh$.next())
      )
      .subscribe()
  }

  updateYear (id: string, knowledgeArray:any, i:any, skills: any) {
    const newKnowledgeArray = knowledgeArray
    newKnowledgeArray[i].year = skills
    this.userService.updateExperience(id, newKnowledgeArray)
      .pipe(
        tap(() => this.refresh$.next())
      )
      .subscribe()
  }
}
