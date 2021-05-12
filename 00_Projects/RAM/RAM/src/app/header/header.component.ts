import { Component, OnInit } from '@angular/core'
import { MainService } from '../services/main.service'
import { Router } from '@angular/router'
import { User } from '../services/mocking/user'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dashboardTag = 'Dashboard';
  listTag = 'List';
  favoriteTag = 'Favourites';
  logIn = 'Log In'
  showLogIn = false;
  model = new User('', '');
  searchInput = ''
  ram:any


  constructor (public srvMain:MainService, public router:Router) { }

  ngOnInit (): void {
  }

  searchSubmit(){
    if(this.router.url === '/list'){
      this.router.navigate(['/dashboard'])
    }
    const obs$ = this.srvMain.getTheAPI("https://rickandmortyapi.com/api/character/?name=" + this.searchInput).subscribe((res:any) => {
      this.ram = res.results;
      obs$.unsubscribe();
      this.srvMain.goToList("https://rickandmortyapi.com/api/character/?name=" + this.searchInput)
      this.router.navigate(['/list'])
    }, (err:any) => {
    })
  }

  openLogIn(){
    this.showLogIn = !this.showLogIn
    if(this.showLogIn){
      this.logIn = 'Log Out';
    } else {
      this.logIn = 'Log In'
    }
  }
  onSubmit () {
    localStorage.removeItem('username');
    this.srvMain.currentUser = this.model;
    this.showLogIn = false;
    localStorage.setItem('username', JSON.stringify(this.srvMain.currentUser));
  }

}
