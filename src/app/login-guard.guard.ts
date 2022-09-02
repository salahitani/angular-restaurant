import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginGuardGuard implements CanActivate {

  constructor(private router: Router) {}
  
  getAccessToken() {
    return localStorage.getItem('token');
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.getAccessToken()) {
      this.router.navigateByUrl('/dashboard');
      return false;
    } else {
      return true;
    }
  }

}
