import { Component, OnInit } from '@angular/core'
import { MainService } from '../services/main.service'
import { Router } from '@angular/router'
import { User } from '../services/mocking/user'
import { of, Subject } from 'rxjs'
import { catchError, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dashboardTag = 'Dashboard';
  listTag = 'List';
  favoriteTag = 'Favourites';
  logIn = 'Log In';
  showLogIn = false;
  model = new User('', '');
  searchInput = ''
  ram:Array<object> = []
  loged = false;

  searchTerm$ = new Subject<string>()

  // eslint-disable-next-line no-useless-constructor
  constructor (public srvMain:MainService, public router:Router) { }

  ngOnInit (): void {
    const el = document.querySelector('.header__logIn')
    if (!this.loged) {
      el?.classList.add('no-loged')
    }

    this.searchTerm$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap((searchValue) => {
          this.router.navigateByUrl('/list?term=' + searchValue)
        })
      )
      .subscribe()
  }

  searchSubmit (searchValue: string) {
    this.searchTerm$.next(searchValue)
  }

  openLogIn () {
    this.showLogIn = !this.showLogIn
  }

  onSubmit () {
    const el = document.querySelector('.header__logIn')
    el?.classList.remove('no-loged')

    this.logIn = this.showLogIn ? 'Log Out' : 'Log In'

    localStorage.removeItem('username')
    this.srvMain.currentUser = this.model
    this.showLogIn = false
    localStorage.setItem('username', JSON.stringify(this.srvMain.currentUser))
    this.loged = true
    this.srvMain.canAddTofavs = true
  }

  backHome () {
    this.showLogIn = false
  }
}
