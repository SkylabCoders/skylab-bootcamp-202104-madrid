import { Component, OnInit } from '@angular/core';
import { MainService } from './services/main.service';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RAM';

  constructor(public mainSrv: MainService, private translate:TranslateService){
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
  }

  ngOnInit (): void {
  }

  changeLang(lang: string){
    this.translate.use(lang);
  }

}
