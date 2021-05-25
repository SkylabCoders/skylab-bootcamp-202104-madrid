import { Component, OnInit } from '@angular/core'
import { environment } from 'src/environments/environment'
import Info from '../models/info'
import { InfoService } from '../services/info.service'
import About from '../models/about'
import Experience from '../models/experience'
import Skills from '../models/skills'

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  personalData: Info[] = []
  aboutMe: About[] = []
  experienceList: Experience [] = []
  skillList: Skills[] = []

  constructor (public infoSvr: InfoService) { }

  ngOnInit () {
    this.getAllInfo(environment.infoApiUrl)
    this.getAllAbout(environment.aboutMeApiUrl)
    this.getAllExp(environment.expApiUrl)
    this.getAllSkills(environment.skillApiUrl)
  }

  getAllInfo (url:string) {
    const obs$ = this.infoSvr.getData(url).subscribe((res:any) => {
      this.personalData = res
      obs$.unsubscribe()
    })
  }

  getAllAbout (url:string) {
    const obs$ = this.infoSvr.getData(url).subscribe((res:any) => {
      this.aboutMe = res
      obs$.unsubscribe()
    })
  }

  getAllExp (url:string) {
    const obs$ = this.infoSvr.getData(url).subscribe((res:any) => {
      this.experienceList = res
      obs$.unsubscribe()
    })
  }

  getAllSkills (url:string) {
    const obs$ = this.infoSvr.getData(url).subscribe((res:any) => {
      this.skillList = res
      obs$.unsubscribe()
    })
  }
}
