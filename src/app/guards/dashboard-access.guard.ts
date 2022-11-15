import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilsService } from '../services/utils.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardAccessGuard implements CanActivate {

  constructor(private router: Router, private utilsService: UtilsService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = this.utilsService.getToken();
    if (token) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }

}
