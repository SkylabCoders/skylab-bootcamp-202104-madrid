import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(public afAuth: AngularFireAuth) {}

  async loginWithGoogle() {
    try {
      return this.afAuth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
    } catch (error) {
      console.log(error);
    }
  }

  async onGoogleLogin() {
    try {
      this.loginWithGoogle();
    } catch {
      alert('segundo error');
    }
  }
}
