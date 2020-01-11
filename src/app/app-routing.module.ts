import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountPageComponent } from './pages/account/account.page';
import { HomePageComponent } from './pages/home/home.page';
import { LoginPageComponent } from './pages/login/login.page';
import { WatchPageComponent } from './pages/watch/watch.page';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: { isPrivate: true },
    canActivate: [AuthGuardService],
  },
  {
    path: 'watch/:id',
    component: WatchPageComponent,
    data: { isPrivate: true },
    canActivate: [AuthGuardService],
  },
  {
    path: 'account',
    component: AccountPageComponent,
    data: { isPrivate: true },
    canActivate: [AuthGuardService],
  },
  {
    path: 'login',
    component: LoginPageComponent,
    data: { isAuthPage: true },
    canActivate: [AuthGuardService],
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
