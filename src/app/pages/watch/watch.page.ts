import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import Plyr from 'plyr';

import { AppState } from '../../store/app.states';
import { User } from '../../models/user';
import { Media } from '../../models/media';
import { MediaService } from '../../services/media.service';
import { MediaProgressService } from '../../services/media-progress.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.page.html',
  styleUrls: ['./watch.page.scss'],
})
export class WatchPageComponent {
  plyrOptions = {
    controls: [
      'play-large',
      'play',
      'rewind',
      'fast-forward',
      'volume',
      'progress',
      'current-time',
      'fullscreen',
    ],
    // autoplay: true,
  };
  plyrSources = [];

  loaded = false;

  player: Plyr;

  user: User;
  media: Media;

  showBackIcon = false;

  constructor(
    store: Store<AppState>,
    route: ActivatedRoute,
    router: Router,
    mediaService: MediaService,
    private mediaProgressService: MediaProgressService
  ) {
    store
      .select(state => state.auth.user)
      .subscribe(user => {
        this.user = user;
      });
    route.paramMap.subscribe(paramMap => {
      const mediaId = parseInt(paramMap.get('id'), 10);
      const media = mediaService.getMedia(mediaId);
      if (!media) {
        router.navigateByUrl('/');
        return;
      }
      this.media = media;
      this.plyrSources = [
        {
          src: media.file,
          type: 'video/mp4',
        },
      ];
    });
  }

  loadedData() {
    const mp = this.mediaProgressService.getMediaProgress(
      this.user,
      this.media
    );
    this.player.currentTime = mp && !mp.finished ? mp.progress : 0;
    this.loaded = true;
    this.player.play();
  }

  controlsShown() {
    this.showBackIcon = true;
  }

  controlsHidden() {
    this.showBackIcon = false;
  }

  timeUpdate() {
    if (!this.loaded) {
      return;
    }
    const { currentTime } = this.player;
    let mp = this.mediaProgressService.getMediaProgress(this.user, this.media);
    if (mp) {
      mp.finished = false;
      mp.progress = currentTime;
    } else {
      mp = {
        userId: this.user.id,
        mediaId: this.media.id,
        finished: false,
        progress: currentTime,
      };
    }
    this.mediaProgressService.saveMediaProgress(mp);
  }

  ended() {
    const mp = this.mediaProgressService.getMediaProgress(
      this.user,
      this.media
    );
    // will never be null
    if (mp) {
      mp.finished = true;
      this.mediaProgressService.saveMediaProgress(mp);
    }
  }
}
