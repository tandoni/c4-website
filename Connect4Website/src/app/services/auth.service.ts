import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { environment } from "../../environments/environment";

@Injectable()
export class AuthService {

  public isSignedInStream: Observable<boolean>;
  public displayNameStream: Observable<string>;
  // public photoUrlStream: Observable<string>;
  // public _currentUsersUid: string;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe((user: firebase.User) => {
      if (user) {
        console.log("user is singed in as ", user);
        // this._currentUsersUid = user.uid;
      } else {
        console.log("user is not signed in.");
        // this._currentUsersUid = '';
      }
    });

    this.isSignedInStream = this.afAuth.authState
      .map<firebase.User, boolean>((user: firebase.User) => {
        return user != null;
      });

    this.displayNameStream = this.afAuth.authState
      .map<firebase.User, string>((user: firebase.User) => {
        return user ? user.displayName || user.uid : '';
      });

    // this.photoUrlStream = this.afAuth.authState
    //   .map<firebase.User, string>((user: firebase.User) => {
    //     console.log(user.photoURL);
    //     return user ? user.photoURL : '';
    //   })
  }

  // get currentUsersUid(): string {
  //   return this._currentUsersUid;
  // }

  signInWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result: any) => {
        this.router.navigate(['home']);
        const user: firebase.User = result.user;
        // this.authorService.updateAuthor(user.uid, user.displayName, user.photoURL);
      });
  }

  signInWithRoseFire() {
    Rosefire.signIn(environment.rosefireRegistryToken, (error, rfUser: RosefireUser) => {
      if (error) {
        // User not logged in!
        console.error(error);
        return;
      }
      this.afAuth.auth.signInWithCustomToken(rfUser.token).then((authState) => {
        this.router.navigate(['home']);
        console.log("firebase signin is dow. user: ", authState);
      });

    });
  }

  signOut() {
    this.afAuth.auth.signOut();
    console.log(`USER IS SIGNED OUT!!!!`);
    this.router.navigate(['/signin']);
  }

}
