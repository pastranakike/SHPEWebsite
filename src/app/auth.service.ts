import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private authState: Observable<firebase.User>;
  private currentUser: firebase.User = null;

  constructor(public afAuth: AngularFireAuth, private http: HttpService, private router: Router) {
      this.authState = this.afAuth.authState;
      this.authState.subscribe(user => {
        if (user) {
          this.currentUser = user;
          this.http.signedIn(user.uid, user.displayName);
        } else {
          this.currentUser = null;
        }
      });
    }
  getAuthState() {
    return this.authState;
  }

  public isLoggedIn(): boolean {
    return this.currentUser != null;
  }

  public loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider());
  }

  public loginWithFacebook() {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider());
  }

  public logout() {
    this.currentUser = null;
    this.router.navigate(['/']);
    return this.afAuth.auth.signOut();
  }

  public getUser() {
    return this.currentUser;
  }

}
