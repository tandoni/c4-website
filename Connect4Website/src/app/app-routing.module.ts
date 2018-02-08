import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "./+main/main.component";
import { SigninComponent } from "./+signin/signin.component";
import { CreateProfileComponent } from "./create-profile/create-profile.component";
import { AuthGuard } from './services/auth.guard';
import { ContactComponent } from './contact/contact.component';
import { FullPhotoComponent } from './full-photo/full-photo.component';
import { GoogleComponent } from './google/google.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: SigninComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'createProfile', component: CreateProfileComponent, canActivate: [AuthGuard] },
  { path: 'photo/:postKey', component: FullPhotoComponent, canActivate: [AuthGuard] },
  { path: 'google', component: GoogleComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
