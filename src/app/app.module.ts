import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PlyrModule } from 'ngx-plyr';

import { AppRoutingModule } from './app-routing.module';
import { IconsModule } from './icons.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login/login.page';
import { AccountPageComponent } from './pages/account/account.page';
import { HomePageComponent } from './pages/home/home.page';
import { WatchPageComponent } from './pages/watch/watch.page';
import { InputComponent } from './components/input/input.component';
import { HeaderComponent } from './components/header/header.component';
import { BillboardComponent } from './components/billboard/billboard.component';
import { SliderComponent } from './components/slider/slider.component';
import { BrowserSliderComponent } from './components/browser-slider/browser-slider.component';
import { SlideContentComponent } from './components/slide-content/slide-content.component';
import { RatingComponent } from './components/rating/rating.component';
import { MediaInformationComponent } from './components/media-information/media-information.component';

import { reducers } from './store/app.states';
import { AuthEffects } from './store/effects/auth.effects';
import { AuthGuardService } from './services/auth-guard.service';
import { MediaService } from './services/media.service';
import { MediaProgressService } from './services/media-progress.service';
import { BillboardService } from './services/billboard.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AccountPageComponent,
    HomePageComponent,
    WatchPageComponent,
    InputComponent,
    HeaderComponent,
    BillboardComponent,
    SliderComponent,
    BrowserSliderComponent,
    SlideContentComponent,
    RatingComponent,
    MediaInformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IconsModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AuthEffects]),
    PlyrModule,
  ],
  providers: [
    AuthGuardService,
    BillboardService,
    MediaProgressService,
    MediaService,
    UserService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
