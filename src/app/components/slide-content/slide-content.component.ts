import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Media } from 'src/app/models/media';

@Component({
  selector: 'app-slide-content',
  templateUrl: './slide-content.component.html',
  styleUrls: ['./slide-content.component.scss'],
})
export class SlideContentComponent {
  @Input() item: Media;
  @Input() hover: boolean;

  @Output() playclick = new EventEmitter<Media>();
  @Output() infoclick = new EventEmitter<Media>();

  handlePlayClick() {
    this.playclick.emit(this.item);
  }

  handleInfoClick() {
    this.infoclick.emit(this.item);
  }
}
