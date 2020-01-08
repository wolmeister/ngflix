import { Component, OnInit, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/app.states';
import { User } from '../../models/user';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  user: User;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store
      .select(state => state.auth.user)
      .subscribe(user => {
        this.user = user;
      });
  }
}
