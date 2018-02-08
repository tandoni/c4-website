import { Component, OnInit, Inject } from '@angular/core';
import { Skills } from "../models/profile.model";
import { MdDialogRef, MD_DIALOG_DATA } from "@angular/material";
import { ProfileService } from "../services/profile.service";

interface SkillsDialogData {
  firebasePath: string;
  skills?: Skills;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: Skills;
  title = "Add new skills";

  constructor(private dialogRef: MdDialogRef<SkillsComponent>,
    @Inject(MD_DIALOG_DATA) private data: SkillsDialogData, private profileServie: ProfileService) {
    this.skills = new Skills();
  }

  ngOnInit() {
    if (this.data.skills) {
      this.title = "Edit these skills";
      Object.assign(this.skills, this.data.skills);
    }
  }

  onSubmit() {
    // this.dialogRef.close()
    // const fbRef = firebase.database().ref(this.data.firebasePath)
    try {
      // fbRef.child(this.data.bio.$key).set(this.bio);
      this.profileServie.addSkills(this.skills);
      this.dialogRef.close();
    } catch (e) {
      console.error("submit error", e);
    }
  }
}
