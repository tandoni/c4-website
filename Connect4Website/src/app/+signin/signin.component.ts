import { Component, OnInit } from '@angular/core';
import 'rosefire';
import { environment } from "../../environments/environment";
import { AngularFireAuth } from "angularfire2/auth";
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  // signInWithRoseFire() {
  //   Rosefire.signIn(environment.rosefireRegistryToken, (error, rfUser: RosefireUser) => {
  //     if (error) {
  //       // User not logged in!
  //       console.error(error);
  //       return;
  //     }
  //     this.afAuth.auth.signInWithCustomToken(rfUser.token).then((authState) => {
  //       console.log("firebase signin is dow. user: ", authState);
  //     });

  //   });
  // }
}
