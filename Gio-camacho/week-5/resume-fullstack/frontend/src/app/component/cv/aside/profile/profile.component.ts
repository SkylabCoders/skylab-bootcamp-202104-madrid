import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../../environments/environment'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: any
  // eslint-disable-next-line no-useless-constructor
  constructor (public httpClient: HttpClient) { }

  ngOnInit (): void {
    this.fetchInfo(environment.profileUrl)
  }

  fetchInfo (url:string) {
    this.httpClient.get(url).subscribe(
      (res) => {
        this.profile = res
      }
    )
  }
}
