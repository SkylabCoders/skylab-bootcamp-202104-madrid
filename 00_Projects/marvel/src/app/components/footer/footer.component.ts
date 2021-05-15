import { Component, OnInit } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  author:string = 'The Thirties'
  date:Date = new Date()

  constructor (public translate: TranslateService) { }

  ngOnInit (): void {
    this.translate.addLangs(['en', 'es'])
    const localLang = localStorage.getItem('lang')
    if (localLang) {
      this.translate.use(localLang)
    }
  }
}
