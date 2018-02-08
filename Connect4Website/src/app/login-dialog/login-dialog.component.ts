import { Component, OnInit, Inject } from '@angular/core';
import { Bio } from "../models/profile.model";
import { MdDialogRef, MD_DIALOG_DATA } from "@angular/material";
import * as firebase from 'firebase/app';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  email: String;
  newEmail: String;
  password: String;
  newPassword: String;
  confirmPassword: String;

  constructor(private dialogRef: MdDialogRef<LoginDialogComponent>, private authService: AuthService) {
  }

  ngOnInit() {
    // if (this.data.password) {
    //   this.title = "Edit this password";
    //   Object.assign(this.formPassword, this.data.password);
    // }
  }

  signInWithEmail(error: HTMLElement) {
    this.authService.signInWithEmailAndPassword(this.email, this.password)
      .then(response => {
        this.dialogRef.close();
      }).catch(err => {
        if (!err.res.status) {
          error.innerHTML = err.res.message;
          error.hidden = false;
        }
      });
  }

  createWithEmail(error: HTMLElement) {
    this.authService.createWithEmailAndPassword(this.newEmail, this.newPassword)
      .then(response => {
        this.dialogRef.close();
      }).catch(err => {
        if (!err.res.status) {
          error.innerHTML = err.res.message;
          error.hidden = false;
        }
      });
  }
}
