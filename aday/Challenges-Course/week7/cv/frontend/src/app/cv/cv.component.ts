import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Cv } from '../models/cv'

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
@Input() cv!: Cv;
@Output() deleteChange = new EventEmitter()
@Output() updateChange = new EventEmitter()
}
