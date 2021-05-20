import { Component } from '@angular/core'
import { MainService } from '../services/main.service'
import { Router } from '@angular/router'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  url = 'https://rickandmortyapi.com/api/character';
  imageRam$ = this.srvMain.getTheAPI(this.url)
    .pipe(
      map((response: any) => response.results.slice(0, 4))
    )

  // eslint-disable-next-line no-useless-constructor
  constructor (public srvMain:MainService, public router:Router) {}

  goToDetails (character:object) {
    this.srvMain.detailsCharacter = character
    this.router.navigate(['details'])
  }
}
