import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState, AuthState } from '../../store/app.states';
import { SignIn } from '../../store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPageComponent implements OnInit {
  email = '';
  password = '';

  getState: Observable<AuthState>;
  error = '';

  constructor(private store: Store<AppState>) {
    this.getState = this.store.select(state => state.auth);
  }

  ngOnInit() {
    this.getState.subscribe((state: AuthState) => {
      this.error = state.error;
    });
  }

  onSubmit() {
    this.store.dispatch(
      new SignIn({
        email: this.email,
        password: this.password,
      })
    );
  }
}
