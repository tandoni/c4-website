import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Photo } from '../models/post.model';
import { AuthService } from '../services/auth.service';
import { PostService } from '../services/post.service';
import { MdSnackBar, MdDialogRef } from '@angular/material';
import * as firebase from 'firebase';

@Component({
  selector: 'app-upload-picture',
  templateUrl: './upload-picture.component.html',
  styleUrls: ['./upload-picture.component.scss']
})
export class UploadPictureComponent implements OnInit {

  url: string;
  caption: string;

  photoListStream: FirebaseListObservable<Photo[]>;

  constructor(public db: AngularFireDatabase, public authService: AuthService, public postService: PostService,
    public snackBar: MdSnackBar, private dialogRef: MdDialogRef<UploadPictureComponent>) {
      this.photoListStream = this.db.list('/photos');
     }

  ngOnInit() {
  }

  onSubmit() {
    try {
      const photo = new Photo({
        url: this.url,
        caption: this.caption,
        uid: this.authService._currentUsersUid,
      });

      // this.postService.addPhoto(photo);
      // const sbRef = this.snackBar.open('Photo added', '', {
      //   duration: 5000,
      // });

      // this.photoListStream.update(nextKey, photo);
      this.url = '';
      this.caption = '';
      this.dialogRef.close(photo);
    } catch (error) {
      console.error('submit failed');
    }
  }

  photoSelected(event: any) {
    const file: File = event.target.files[0];
    const metaData = { 'contentType': file.type };
    const nextKey = this.photoListStream.push({}).key;
    const storageRef: firebase.storage.Reference = firebase.storage().ref(`/photos/${nextKey}`);
    const uploadTask: firebase.storage.UploadTask = storageRef.put(file, metaData);
    console.log(`Uploading: ${file.name}`);
    document.getElementById('spinner').style.display = 'flex';
    document.getElementById('upload').style.display = 'none';

    uploadTask.then((uploadSnapshot: firebase.storage.UploadTaskSnapshot) => {
      console.log(`Upload is complete!`);
      document.getElementById('spinner').style.display = 'none';
      document.getElementById('upload').style.display = 'block';
      document.getElementsByName('url')[0].focus();
      // firebase.database().ref(`/photos/list/${nextKey}`).set(nextKey);
      this.url = uploadSnapshot.downloadURL;
    });
  }

}
