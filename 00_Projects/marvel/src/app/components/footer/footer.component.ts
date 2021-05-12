import { Component, OnInit } from '@angular/core'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  terms:string = 'Terms of use'
  privacy:string = 'Privacy Policy'
  author:string = 'The Thirties'
  date:Date = new Date()
  constructor () { }
  ngOnInit (): void {
  }
}
