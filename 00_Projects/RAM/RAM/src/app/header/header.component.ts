import { Component, OnInit } from '@angular/core'
import { MainService } from '../services/main.service';
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
  logIn = 'LogIn'
  showLogIn = false;
  model = new User('', '');
  searchInput = ''
  ram:any
  

  constructor (public srvMain:MainService) { }

  ngOnInit (): void {
  }

  searchSubmit(){
    console.log(this.searchInput);
    const obs$ = this.srvMain.getTheAPI("https://rickandmortyapi.com/api/character/?name=" + this.searchInput).subscribe((res:any) => {
      console.log('esta')
      this.ram = res.results;
      obs$.unsubscribe();
    }, (err:any) => {
      console.log('no esta')
    })
  }
  openLogIn(){
    this.showLogIn = !this.showLogIn
  }
  onSubmit () {
    localStorage.removeItem('username');
    this.srvMain.currentUser = this.model
    console.log(this.srvMain.currentUser);
    this.showLogIn = false;
    localStorage.setItem('username', JSON.stringify(this.srvMain.currentUser));
  }

}
