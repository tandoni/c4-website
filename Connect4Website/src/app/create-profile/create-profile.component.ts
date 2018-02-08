import { Component, OnInit } from '@angular/core';
import { MdDialogConfig, MdDialog } from "@angular/material";
import { BioComponent } from "../bio/bio.component";
import { AuthService } from "../services/auth.service";
import { ProfileService } from "../services/profile.service";
import { SkillsComponent } from "../skills/skills.component";
import { EducationComponent } from "../education/education.component";
import { ExperienceComponent } from "../experience/experience.component";
import { AwardsComponent } from '../awards/awards.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss', '../shared/common.scss']
})
export class CreateProfileComponent implements OnInit {
  isExpanded = false;
  readonly firebasePath = 'profiles';

  constructor(private dialog: MdDialog, private authService: AuthService, private profileService: ProfileService) { }

  ngOnInit() {
  }

  get numColumns(): number {
    if (window.innerWidth < 500) {
      return 1;
      // } else if (window.innerWidth < 900) {
      //   return 2;
      // } else if (window.innerWidth < 1300) {
      //   return 3;
    }
    return 2;
  }

  get heightDec(): number {
    if (window.innerWidth < 500) {
      return 150;
    } else if (window.innerWidth < 900) {
      return 175;
    } else if (window.innerWidth < 1300) {
      return 200;
    }
    return 225;
  }

  showBioCard() {
    // console.log('pop a dialog here');
    this.profileService.getBio(this.authService._currentUsersUid).then(res => {
      // console.log(res);
      const dialogConfig = new MdDialogConfig();
      dialogConfig.data = {
        firebasePath: `${this.firebasePath}/${this.authService._currentUsersUid}`,
        bio: res.res,
      };
      this.dialog.open(BioComponent, dialogConfig);
    });
  }

  showSkillsCard() {
    this.profileService.getSkills(this.authService._currentUsersUid).then(res => {
      // console.log(res);
      const dialogConfig = new MdDialogConfig();
      dialogConfig.data = {
        firebasePath: `${this.firebasePath}/${this.authService._currentUsersUid}`,
        skills: res.res,
      };
      this.dialog.open(SkillsComponent, dialogConfig);
    });
  }

  showEducationCard() {
    this.profileService.getEducation(this.authService._currentUsersUid).then(res => {
      // console.log(res);
      const dialogConfig = new MdDialogConfig();
      dialogConfig.data = {
        firebasePath: `${this.firebasePath}/${this.authService._currentUsersUid}`,
        education: res.res,
      };
      this.dialog.open(EducationComponent, dialogConfig);
    });
  }

  showExperienceCard() {
    this.profileService.getExperience(this.authService._currentUsersUid).then(res => {
      // console.log(res);
      const dialogConfig = new MdDialogConfig();
      dialogConfig.data = {
        firebasePath: `${this.firebasePath}/${this.authService._currentUsersUid}`,
        experience: res.res,
      };
      this.dialog.open(ExperienceComponent, dialogConfig);
    });
  }

  showAwardsCard() {
    this.profileService.getAwards(this.authService._currentUsersUid).then(res => {
      // console.log(res);
      const dialogConfig = new MdDialogConfig();
      dialogConfig.data = {
        firebasePath: `${this.firebasePath}/${this.authService._currentUsersUid}`,
        awards: res.res,
      };
      this.dialog.open(AwardsComponent, dialogConfig);
    });
  }

  showProjectsCard() {
    this.profileService.getProjects(this.authService._currentUsersUid).then(res => {
      // console.log(res);
      const dialogConfig = new MdDialogConfig();
      dialogConfig.data = {
        firebasePath: `${this.firebasePath}/${this.authService._currentUsersUid}`,
        projects: res.res,
      };
      this.dialog.open(ProjectsComponent, dialogConfig);
    });
  }

}
