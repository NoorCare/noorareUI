import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let userToken = localStorage.getItem('userToekn');
      console.log(userToken);
      if(userToken != null) { 
         return true;
        }
         else{
          this.router.navigate(['/login']);
          return false;
         }
    
      
  }
  
}
