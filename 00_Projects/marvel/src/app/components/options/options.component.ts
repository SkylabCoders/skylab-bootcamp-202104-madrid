import { Component, OnInit } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  title = 'Lenguages'
  english = 'English'
  spanish = 'Spanish'
  constructor (public translate: TranslateService) {
    translate.addLangs(['en', 'es'])
    translate.setDefaultLang('en')
  }

  ngOnInit (): void {
  }

  changeLang (lang:any) {
    this.translate.use(lang)
    localStorage.setItem('lang', lang)
  }
}
