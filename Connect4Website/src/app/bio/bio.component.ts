import { Component, OnInit, Inject } from '@angular/core';
import { Bio } from "../models/profile.model";
import { MdDialogRef, MD_DIALOG_DATA } from "@angular/material";
import { ProfileService } from "../services/profile.service";
import * as firebase from 'firebase/app';

interface BioDialogData {
  firebasePath: string;
  bio?: Bio;
}

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {

  bio: Bio;
  title = "Add new Bio";

  constructor(private dialogRef: MdDialogRef<BioComponent>,
    @Inject(MD_DIALOG_DATA) private data: BioDialogData, private profileServie: ProfileService) {
    this.bio = new Bio();
  }

  ngOnInit() {
    if (this.data.bio) {
      this.title = "Edit this bio";
      Object.assign(this.bio, this.data.bio);
    }
  }

  onSubmit() {
    // this.dialogRef.close()
    // const fbRef = firebase.database().ref(this.data.firebasePath)
    try {
      // fbRef.child(this.data.bio.$key).set(this.bio);
      this.profileServie.addBio(this.bio);
      this.dialogRef.close();
    } catch (e) {
      console.error("submit error", e);
    }
  }

}
