import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ProfileService } from "./profile.service";

@Injectable()
export class ProfileGuard implements CanActivate {
  constructor(private router: Router, private profileService: ProfileService){ }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // return this.profileService.
    //   doesProfileExist.map<boolean, boolean>((doesProfileExist) => {
    //     if (!doesProfileExist) {
    //       this.router.navigate(['home']);
    //     } else {
    //       this.router.navigate(['createProfile']);
    //     }
    //   });
    return false;
  }
}
