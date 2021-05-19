import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuthModule } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  async logIn() {
    try {
      return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
    } catch (error) { console.log(error); }
  }

  constructor(public afAuth: AngularFireAuthModule) { }