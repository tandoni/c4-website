import { Component, OnInit, Inject } from '@angular/core';
import { Projects } from "../models/profile.model";
import { MD_DIALOG_DATA, MdDialogRef } from "@angular/material";
import { ProfileService } from "../services/profile.service";

interface ProjectsDialogData {
  firebasePath: string;
  projects?: Projects;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Projects;
  title = "Add new projects";

  constructor(private dialogRef: MdDialogRef<ProjectsComponent>,
    @Inject(MD_DIALOG_DATA) private data: ProjectsDialogData, private profileServie: ProfileService) {
    this.projects = new Projects();
  }

  ngOnInit() {
    if (this.data.projects) {
      this.title = "Edit these projects";
      Object.assign(this.projects, this.data.projects);
    }
  }

  onSubmit() {
    // this.dialogRef.close()
    // const fbRef = firebase.database().ref(this.data.firebasePath)
    try {
      // fbRef.child(this.data.bio.$key).set(this.bio);
      this.profileServie.addProjects(this.projects);
      this.dialogRef.close();
    } catch (e) {
      console.error("submit error", e);
    }
  }

}
