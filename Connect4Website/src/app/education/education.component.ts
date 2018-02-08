import { Component, OnInit, Inject } from '@angular/core';
import { Education } from "../models/profile.model";
import { MdDialogRef, MD_DIALOG_DATA } from "@angular/material";
import { ProfileService } from "../services/profile.service";

interface EducationDialogData {
  firebasePath: string;
  education?: Education;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  education: Education;
  title = "Add new education";

  constructor(private dialogRef: MdDialogRef<EducationComponent>,
    @Inject(MD_DIALOG_DATA) private data: EducationDialogData, private profileServie: ProfileService) {
    this.education = new Education();
  }

  ngOnInit() {
    if (this.data.education) {
      this.title = "Edit this education";
      Object.assign(this.education, this.data.education);
    }
  }

  onSubmit() {
    // this.dialogRef.close()
    // const fbRef = firebase.database().ref(this.data.firebasePath)
    try {
      // fbRef.child(this.data.bio.$key).set(this.bio);
      this.profileServie.addEducation(this.education);
      this.dialogRef.close();
    } catch (e) {
      console.error("submit error", e);
    }
  }

}
