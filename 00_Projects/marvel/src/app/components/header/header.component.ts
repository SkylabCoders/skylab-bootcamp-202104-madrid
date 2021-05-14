import { Component, OnInit } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  constructor (public translate: TranslateService) {}

  ngOnInit (): void {
    this.translate.addLangs(['en', 'es'])
    const localLang = localStorage.getItem('lang')
    if (localLang) {
      this.translate.use(localLang)
    }
  }
}
