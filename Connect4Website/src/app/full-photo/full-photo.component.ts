import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { MdDialog, MdSnackBar } from '@angular/material';
import { PostService } from '../services/post.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-full-photo',
  templateUrl: './full-photo.component.html',
  styleUrls: ['./full-photo.component.scss']
})
export class FullPhotoComponent implements OnInit {

  postKey: string;
  post: Post;

  constructor(private dialog: MdDialog, private snackBar: MdSnackBar,
    public postService: PostService, private route: ActivatedRoute,
    private router: Router, public authService: AuthService) {
      this.route.params.subscribe((routeParams: Params) => {
        this.postKey = routeParams['postKey'];
        this.initializePhoto(this.postKey);
      });
  }

  ngOnInit() {
  }

  initializePhoto(key: String) {
    const photofromDb = firebase.database().ref(`/posts/${key}`);

    photofromDb.on('value', (snapshot) => {
      this.post = snapshot.val();
    });
  }

  displayEditOptions() {
    return (this.post.userId === this.authService._currentUsersUid);
  }

  goBack() {
    this.router.navigate(['/']);
  }

  delete() {
    this.postService.removePicture(this.postKey);
    this.router.navigate(['/']);
    const sbRef = this.snackBar.open('Photo removed', '', {
      duration: 5000,
    });
  }

}
