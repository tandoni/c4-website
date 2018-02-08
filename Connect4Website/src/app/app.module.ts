import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './+main/main.component';
import { SigninComponent } from './+signin/signin.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import * as Raven from 'raven-js';

Raven
  .config('https://ac954319f62444d6b1b2a404ab2df71b@sentry.io/218797')
  .install();

export class RavenErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    Raven.captureException(err.originalError || err);
  }
}

import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdDialogModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule
} from '@angular/material';
import { AuthService } from "./services/auth.service";
import { LoginDialogComponent } from "./login-dialog/login-dialog.component";
import { FormsModule } from "@angular/forms";
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ProfileGuard } from "./services/profile.guard";
import { ProfileService } from "./services/profile.service";
import { BioComponent } from './bio/bio.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { AwardsComponent } from './awards/awards.component';
import { ProjectsComponent } from './projects/projects.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';
import { AuthGuard } from './services/auth.guard';
import { ReversePipe } from './pipes/reverse.pipe';
import { KeysPipe } from './pipes/keys.pipe';
import { UploadPictureComponent } from './upload-picture/upload-picture.component';
import { ContactComponent } from './contact/contact.component';
import { MessageService } from './services/message.service';
import { FullPhotoComponent } from './full-photo/full-photo.component';
import { GoogleComponent } from './google/google.component';

export const MaterialModules = [
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdDialogModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SigninComponent,
    LoginDialogComponent,
    CreateProfileComponent,
    BioComponent,
    SkillsComponent,
    EducationComponent,
    ExperienceComponent,
    AwardsComponent,
    ProjectsComponent,
    PostComponent,
    ReversePipe,
    KeysPipe,
    UploadPictureComponent,
    ContactComponent,
    FullPhotoComponent,
    GoogleComponent,
  ],
  entryComponents: [
    LoginDialogComponent,
    BioComponent,
    SkillsComponent,
    EducationComponent,
    ExperienceComponent,
    AwardsComponent,
    ProjectsComponent,
    UploadPictureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MaterialModules,
    FlexLayoutModule,
    FormsModule,
  ],
  providers: [AuthService,
    AuthGuard,
    ProfileGuard,
    ProfileService,
    PostService,
    MessageService,
    { provide: ErrorHandler, useClass: RavenErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
