import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
class AuthService {
  constructor(public afAuth: AngularFireAuth) { }

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  AuthLogin(provider:any) {
    return this.afAuth.signInWithPopup(provider)
      .then((result:any) => {
        console.log(`result: ${result}`);
      }).catch((error:any) => {
        console.log(error);
      });
  }
}

export default AuthService;
