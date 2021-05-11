import { Component, OnInit } from '@angular/core'
import { User } from '../services/mocking/user'
import { MainService } from '../services/main.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model = new User(' ', ' ');
  // eslint-disable-next-line no-useless-constructor
  constructor (public srvMain:MainService) {}
  ngOnInit (): void {
  }

  onSubmit () {
    this.srvMain.currentUser = this.model
    console.log(this.srvMain.currentUser)
  }
}
