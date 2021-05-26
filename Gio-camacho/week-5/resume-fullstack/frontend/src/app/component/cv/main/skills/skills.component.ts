import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../../environments/environment'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: any

  // eslint-disable-next-line no-useless-constructor
  constructor (public httpClient: HttpClient) { }

  ngOnInit (): void {
    this.fetchInfo(environment.skillsUrl)
  }

  fetchInfo (url:string) {
    this.httpClient.get(url).subscribe(
      (res) => {
        this.skills = res
        console.log(this.skills)
      }
    )
  }
}
