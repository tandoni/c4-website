import { Component, OnInit, Inject } from '@angular/core';
import { Experience } from "../models/profile.model";
import { MdDialogRef, MD_DIALOG_DATA } from "@angular/material";
import { ProfileService } from "../services/profile.service";

interface ExperienceDialogData {
  firebasePath: string;
  experience?: Experience;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experience: Experience;
  title = "Add new experience";

  constructor(private dialogRef: MdDialogRef<ExperienceComponent>,
    @Inject(MD_DIALOG_DATA) private data: ExperienceDialogData, private profileServie: ProfileService) {
    this.experience = new Experience();
  }

  ngOnInit() {
    if (this.data.experience) {
      this.title = "Edit this experience";
      Object.assign(this.experience, this.data.experience);
    }
  }

  onSubmit() {
    // this.dialogRef.close()
    // const fbRef = firebase.database().ref(this.data.firebasePath)
    try {
      // fbRef.child(this.data.bio.$key).set(this.bio);
      this.profileServie.addExperience(this.experience);
      this.dialogRef.close();
    } catch (e) {
      console.error("submit error", e);
    }
  }
}

