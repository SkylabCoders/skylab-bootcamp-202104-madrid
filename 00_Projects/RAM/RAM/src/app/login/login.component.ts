import { Component, OnInit } from '@angular/core'
import { User } from '../services/mocking/user'
import { LoginService } from '../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model = new User(' ', ' ');
  // eslint-disable-next-line no-useless-constructor
  constructor (public srvLogin:LoginService) {}
  ngOnInit (): void {
  }

  onSubmit () {
    this.srvLogin.currentUser = this.model
    console.log(this.srvLogin.currentUser)
  }
}
