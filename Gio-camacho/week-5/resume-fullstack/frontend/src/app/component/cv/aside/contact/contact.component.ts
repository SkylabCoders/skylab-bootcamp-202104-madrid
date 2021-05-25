import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../../environments/environment'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  aboutMe:any

  // eslint-disable-next-line no-useless-constructor
  constructor (public httpClient: HttpClient) { }

  ngOnInit (): void {
    this.fetchInfo(environment.contactUrl)
  }

  fetchInfo (url:string) {
    this.httpClient.get(url).subscribe(
      (res) => {
        this.aboutMe = res
      }
    )
  }
}
