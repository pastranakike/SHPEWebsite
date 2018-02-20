import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthGuardGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const subject = new Subject<boolean>();
    const logged = this.auth.isLoggedIn();
    let count = 0;
    let loggedIn = false;
    const interval = window.setInterval(() => {
      if (this.auth.isLoggedIn()) {
        loggedIn = true;
      }
      count++;
      if (count >= 4 || loggedIn) {
          if (!loggedIn) {
            this.router.navigate(['/']);
          }
          subject.next(loggedIn);
          window.clearInterval(interval);
      }
    }, 200);
    return subject.asObservable();
  }
}
