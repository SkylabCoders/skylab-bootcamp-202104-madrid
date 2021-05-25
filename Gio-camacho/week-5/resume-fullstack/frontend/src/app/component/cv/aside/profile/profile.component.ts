import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  // eslint-disable-next-line no-useless-constructor
  constructor (public httpClient: HttpClient) { }

  ngOnInit (): void {
  }
}
