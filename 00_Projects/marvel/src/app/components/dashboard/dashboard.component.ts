import { Component, OnInit } from '@angular/core'
import { HttpService } from 'src/app/services/http.service'
import { Imarvel } from '../../models/Imarvel'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor (public http:HttpService) { }

  ngOnInit (): void {
  }
}
