import { Component, OnInit } from '@angular/core'
import { Imarvel } from '../../models/Imarvel'
import { MainService } from '../../services/main.service'
import { URL } from '../../models/url'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'Meet de mighty heroes and villains of Marvel Universe';
  marvelList: Imarvel[] = [];
  randomList: Imarvel[] = [];
  topHeros: Imarvel[] = [];

  constructor (public mainSrv: MainService) {}

  ngOnInit (): void {
    this.mainSrv
      .getAction('getList', URL.apiURL + URL.CharactersURL)
      .subscribe((res: any) => {
        this.randomList = res.data.results.sort(() => Math.random() - 0.5)
        for (let i = 0; i < 4; i++) {
          this.topHeros.push(this.randomList[i])
        }
      })
  }

  goCharacter (characters: any) {
    this.mainSrv.character = characters
  }
}
