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

  state: Observable<AuthState>;
  error = '';

  constructor(private store: Store<AppState>) {
    this.state = this.store.select(state => state.auth);
  }

  ngOnInit() {
    this.state.subscribe((state: AuthState) => {
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
