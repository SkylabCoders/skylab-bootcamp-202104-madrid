import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authSvc: AuthService, private log: LoginService) { }

  ngOnInit(): void {
  }

  async onGoogleLogin() {
    try {
      this.authSvc.logIn();
    } catch (error) { console.log(error); }
  }
}
