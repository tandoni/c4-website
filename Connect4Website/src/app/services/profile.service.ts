import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';
import { AuthService } from "./auth.service";
import { Education, Experience, Awards, Projects, Bio, Skills } from "../models/profile.model";

@Injectable()
export class ProfileService {

  public doesProfileExist: Observable<boolean>;
  readonly profilesPath = 'profiles';
  private profile;

  constructor(private afAuth: AngularFireAuth, private router: Router, private authService: AuthService) {
    this.doesProfileExist = this.afAuth.authState
      .map<firebase.User, boolean>((user: firebase.User) => {
        return user != null;
      });
  }

  //  checkIfProfileExists(profile: Profile) {

  //  }

  //  createProfile(profile: Profile) {
  //    firebase.database().ref(`${this.profilesPath}/${profile.name}`).set(profile);
  //  }

  addBio(bio: Bio) {
    // this.profile = new Profile(bio);
    firebase.database().ref(`${this.profilesPath}/${this.authService._currentUsersUid}/bio`).set(bio);
    console.log('added to firebase.');
  }

  addSkills(skills: Skills) {
    firebase.database().ref(`${this.profilesPath}/${this.authService._currentUsersUid}/skills`).set(skills);
  }

  addEducation(education: Education) {
    firebase.database().ref(`${this.profilesPath}/${this.authService._currentUsersUid}/education`).set(education);
  }

  addExperience(experience: Experience) {
    firebase.database().ref(`${this.profilesPath}/${this.authService._currentUsersUid}/experience`).set(experience);
  }

  addAwards(awards: Awards) {
    firebase.database().ref(`${this.profilesPath}/${this.authService._currentUsersUid}/awards`).set(awards);
  }

  addProjects(projects: Projects) {
    firebase.database().ref(`${this.profilesPath}/${this.authService._currentUsersUid}/projects`).set(projects);
  }

  getBio(user: string): Promise<any> {
    return new Promise((resolve, reject) => {
      let bio = firebase.database().ref(`${this.profilesPath}/${user}/bio`);
      bio.once('value', (snapshot) => {
        resolve({ res: snapshot.val() });
      }).catch(err => {
        reject({ res: '' });
      });;
    });
  }

  getSkills(user: String): Promise<any> {
    return new Promise((resolve, reject) => {
      let skills = firebase.database().ref(`${this.profilesPath}/${user}/skills`);
      skills.once('value', (snapshot) => {
        resolve({ res: snapshot.val() });
      }).catch(err => {
        reject({ res: '' });
      });;
    });
  }

  getEducation(user: String): Promise<any> {
    return new Promise((resolve, reject) => {
      let education = firebase.database().ref(`${this.profilesPath}/${user}/education`);
      education.once('value', (snapshot) => {
        resolve({ res: snapshot.val() });
      }).catch(err => {
        reject({ res: '' });
      });;
    });
  }

  getExperience(user: String): Promise<any> {
    return new Promise((resolve, reject) => {
      let experience = firebase.database().ref(`${this.profilesPath}/${user}/experience`);
      experience.once('value', (snapshot) => {
        resolve({ res: snapshot.val() });
      }).catch(err => {
        reject({ res: '' });
      });;
    });
  }

  getAwards(user: String): Promise<any> {
    return new Promise((resolve, reject) => {
      let awards = firebase.database().ref(`${this.profilesPath}/${user}/awards`);
      awards.once('value', (snapshot) => {
        resolve({ res: snapshot.val() });
      }).catch(err => {
        reject({ res: '' });
      });;
    });
  }

  getProjects(user: String): Promise<any> {
    return new Promise((resolve, reject) => {
      let projects = firebase.database().ref(`${this.profilesPath}/${user}/projects`);
      projects.once('value', (snapshot) => {
        resolve({ res: snapshot.val() });
      }).catch(err => {
        reject({ res: '' });
      });;
    });
  }


}
