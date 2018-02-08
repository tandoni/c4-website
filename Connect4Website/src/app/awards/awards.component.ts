import { Component, OnInit, Inject } from '@angular/core';
import { Awards } from "../models/profile.model";
import { MdDialogRef, MD_DIALOG_DATA } from "@angular/material";
import { ProfileService } from "../services/profile.service";

interface AwardsDialogData {
  firebasePath: string;
  awards?: Awards;
}

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  awards: Awards;
  title = "Add new awards";

  constructor(private dialogRef: MdDialogRef<AwardsComponent>,
    @Inject(MD_DIALOG_DATA) private data: AwardsDialogData, private profileServie: ProfileService) {
    this.awards = new Awards();
  }

  ngOnInit() {
    if (this.data.awards) {
      this.title = "Edit these awards";
      Object.assign(this.awards, this.data.awards);
    }
  }

  onSubmit() {
    // this.dialogRef.close()
    // const fbRef = firebase.database().ref(this.data.firebasePath)
    try {
      // fbRef.child(this.data.bio.$key).set(this.bio);
      this.profileServie.addAwards(this.awards);
      this.dialogRef.close();
    } catch (e) {
      console.error("submit error", e);
    }
  }
}
