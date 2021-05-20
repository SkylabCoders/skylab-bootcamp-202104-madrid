import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { }

  async loginGoogle(): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithPopup(
        new auth.GoogleAuthProvider()
      );
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}
