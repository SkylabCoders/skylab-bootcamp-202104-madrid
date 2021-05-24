import { Component, OnInit } from '@angular/core'
import { environment } from 'src/environments/environment'
import Info from '../models/info'
import { InfoService } from '../services/info.service'

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  personalData: Info[] = []

  constructor (public infoSvr: InfoService) { }

  ngOnInit (): void {
    this.getAll(environment.infoApiUrl)
  }

  getAll (url:string) {
    const obs$ = this.infoSvr.getData(url).subscribe((res:any) => {
      this.personalData = res
      console.log(res)
      obs$.unsubscribe()
    })
  }
}
