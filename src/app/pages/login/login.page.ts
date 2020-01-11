import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/app.states';
import { SignIn } from '../../store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPageComponent {
  email = '';
  password = '';

  error = '';

  constructor(private store: Store<AppState>) {
    store
      .select(state => state.auth.error)
      .subscribe(error => {
        this.error = error;
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
