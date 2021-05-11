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

  constructor (public srvMain:MainService) { }

  ngOnInit (): void {

  }
  openLogIn(){
    this.showLogIn = !this.showLogIn
  }
  onSubmit () {
    this.srvMain.currentUser = this.model
    console.log(this.srvMain.currentUser);
    this.showLogIn = false;
  }

}
