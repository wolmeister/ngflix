import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { BillboardService } from '../../services/billboard.service';
import { MediaService } from '../../services/media.service';
import { BillboardMedia } from '../../models/billboard-media';
import { Media } from '../../models/media';
import { AppState } from '../../store/app.states';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePageComponent {
  transparent = true;
  billboard: BillboardMedia;
  medias: Media[];
  watchingMedias: Media[] = [];

  constructor(
    store: Store<AppState>,
    billboardService: BillboardService,
    mediaService: MediaService,
    private router: Router
  ) {
    this.billboard = billboardService.getBillboard();
    this.medias = mediaService.getMedias();
    store
      .select(state => state.auth.user)
      .subscribe(user => {
        this.watchingMedias = mediaService.getUnfinishedMedias(user);
      });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.transparent = window.scrollY < 70;
  }

  handlePlay(mediaId: number) {
    this.router.navigateByUrl(`/watch/${mediaId}`);
  }
}
