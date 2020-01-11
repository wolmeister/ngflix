import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { AppState } from '../store/app.states';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    return this.store
      .select(state => state.auth.user)
      .pipe(
        map(user => {
          if (route.data.isPrivate && !user) {
            this.router.navigateByUrl('/login');
            return false;
          }
          if (route.data.isAuthPage && user) {
            this.router.navigateByUrl('/');
            return false;
          }
          return true;
        })
      );
  }
}
