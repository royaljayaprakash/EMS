import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const id = +next.url[1].path;
   const id2 = next.paramMap.get('id');
     console.log(id2);
    if (isNaN(id) || id < 1) {
      alert('Invalid employee Id');
      this.router.navigate(['/employees']);
      return false;
    }
    return true;
  }

}
