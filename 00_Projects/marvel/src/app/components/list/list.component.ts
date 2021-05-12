import { Component, OnInit } from '@angular/core'
import { HttpService } from '../../services/http.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor (public http:HttpService) { }

  ngOnInit (): void {
  }
}
