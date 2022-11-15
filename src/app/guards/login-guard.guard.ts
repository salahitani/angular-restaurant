import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilsService } from '../services/utils.service';

@Injectable({
  providedIn: 'root'
})

export class LoginGuardGuard implements CanActivate {

  constructor(private router: Router, private utilsService: UtilsService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = this.utilsService.getToken();
    if (token) {
      this.router.navigateByUrl('/dashboard');
      return false;
    } else {
      return true;
    }
  }

}
