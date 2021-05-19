import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import {} from 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private logSvr:LoginService) { }

  ngOnInit(): void {
  }
 
  async onGoogleLogin() {
    try {
      const user = await this.logSvr.loginGoogle();
      if (user) {
        this.checkUserIsVerified(user);
      }
    } catch (error) {
      console.log(error);
    }
  }

}

