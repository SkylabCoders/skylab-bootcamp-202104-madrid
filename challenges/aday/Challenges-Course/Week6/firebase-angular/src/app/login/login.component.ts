import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
default export class LoginComponent implements OnInit {
  
  constructor(public afAuth: AngularFireAuthModule) { }
  
  ngOnInit(): void {
  }
  async logIn() {
    try {
      return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
    } catch (error) { console.log(error); }
  }

}
