import { Component, OnInit } from '@angular/core'
import { MainService } from '../services/main.service'
import { ActivatedRoute, Router } from '@angular/router'
import { map, switchMap, tap } from 'rxjs/operators'
import { Observable, of, Subject } from 'rxjs'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  nextPage$ = new Subject<string>()

  nextUrl: string = '';
  prevUrl: string = '';

  ram$!: Observable<any>

  // eslint-disable-next-line no-useless-constructor
  constructor (
    public srvMain:MainService,
    public router:Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit (): void {
    this.route.queryParams
      .pipe(
        tap(({ term }) => this.nextPage$.next('https://rickandmortyapi.com/api/character/?name=' + term))
      )
      .subscribe()

    this.ram$ = this.nextPage$
      .pipe(
        tap(console.log),
        switchMap(url => this.srvMain.getTheAPI(url)),
        tap((response: any) => {
          this.nextUrl = response?.info?.next
          if (response?.info?.prev !== 'https://rickandmortyapi.com/api/character') {
            this.prevUrl = response?.info?.prev
          }
        }),
        map((response: any) => response.results)
      )

    setTimeout(() => {
      this.chargePage(this.srvMain.url)
    }, 0)
  }

  chargePage (url:string) {
    this.nextPage$.next(url)
  }

  sendToDetail (character:object) {
    this.srvMain.detailsCharacter = character
    this.router.navigate(['details'])
  }
}
