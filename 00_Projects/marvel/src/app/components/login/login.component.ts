import { Component, OnInit } from '@angular/core'
import { User } from './../../models/Iusers'
import { MainService } from '../../services/main.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userData = {
    userName: '',
    password: ''
  }

  constructor (public srv:MainService) { }

  ngOnInit (): void {
  }

  onSubmit () {
    this.srv.userData = this.userData
  }
}
