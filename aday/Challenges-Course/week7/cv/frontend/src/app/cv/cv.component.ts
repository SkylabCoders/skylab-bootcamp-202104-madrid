import { Component, OnInit } from '@angular/core'
import environment from '../../environments/environment'
import { Cv } from '../models/cv'
import CvService from '../services/cv.service'

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  constructor (private cvService: CvService) { }

cvData: Cv[] = [];

ngOnInit (): void {
  const obs$ = this.cvService.getAllCvs(environment.urlApi).subscribe((res:any) => {
    this.cvData = res
    console.log(this.cvData)
    obs$.unsubscribe()
  })
}
}
