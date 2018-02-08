import { Component, OnInit, OnDestroy, EventEmitter, Input } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";
import { MdDialog, MdDialogConfig } from "@angular/material";
import { Bio } from "../models/profile.model";
import { LoginDialogComponent } from "../login-dialog/login-dialog.component";
import { PostService } from '../services/post.service';
import { UploadPictureComponent } from '../upload-picture/upload-picture.component';
import { Photo, Post } from '../models/post.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  post: String;

  photo: Photo;

  isExpanded = false;

  constructor(private authService: AuthService, private dialog: MdDialog, private router: Router, public postService: PostService) {
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // this.authStateSubscription.unsubscribe();
  }

  onSubmit() {
    let p = new Post({
      author: this.authService._currentUsersDisplayName,
      post: this.post,
      time: (new Date()).getTime().toString(),
      userId: this.authService._currentUsersUid,
      likes: [],
      comments: [],
      photo: this.photo,
    });
    this.postService.addPost(p);
    this.post = '';
  }

  showPhotoDialog() {
    const dialogConfig = new MdDialogConfig();

    let diaLogRef = this.dialog.open(UploadPictureComponent);
    diaLogRef.afterClosed().subscribe((result: Photo) => {
      this.photo = result;
      this.post = result.caption;
    });
  }

}
