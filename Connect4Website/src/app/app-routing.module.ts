import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "./+main/main.component";
import { SigninComponent } from "./+signin/signin.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainComponent },
  { path: 'signin', component: SigninComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
