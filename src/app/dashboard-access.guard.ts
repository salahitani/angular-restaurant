import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardAccessGuard implements CanActivate {

  constructor(private router: Router) {}

  getAccessToken() {
    return localStorage.getItem('token');
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.getAccessToken()) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }

}
