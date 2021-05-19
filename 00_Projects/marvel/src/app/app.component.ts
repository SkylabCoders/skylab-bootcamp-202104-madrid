import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marvel';
  testLang = 'i18n'
  constructor (private translate: TranslateService) {
    translate.addLangs(['en', 'es'])
    translate.setDefaultLang('en')
  }

  changeLang (lang:any) {
    this.translate.use(lang)
  }
}
