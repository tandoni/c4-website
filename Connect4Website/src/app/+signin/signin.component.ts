import { Component, OnInit } from '@angular/core';
import 'rosefire';
import { environment } from "../../environments/environment";
import { AngularFireAuth } from "angularfire2/auth";
import { AuthService } from "../services/auth.service";
import { MdDialogConfig, MdDialog } from "@angular/material";
import { LoginDialogComponent } from "../login-dialog/login-dialog.component";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  firebasePath: string; 
  email: String;
  password: String; 

  constructor(public authService: AuthService, private dialog: MdDialog) { }

  ngOnInit() {
  }

  showLoginDialog() {
    const dialogConfig = new MdDialogConfig();
    dialogConfig.data = {firebasePath: this.firebasePath};

    this.dialog.open(LoginDialogComponent);
  } 

  signInWithRoseFire() {
    this.authService.signInWithRoseFire();
    // this.dialogRef.close();
  }

  signInWithGithub() {
    this.authService.signInWithGithub();
    // this.dialogRef.close();
  }
}
