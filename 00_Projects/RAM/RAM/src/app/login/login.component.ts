import { Component, OnInit } from '@angular/core'
import { User } from '../services/mocking/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model = new User(' ', ' ');

  ngOnInit (): void {
  }

  onSubmit () {
    console.log(this.model)
  }
}
