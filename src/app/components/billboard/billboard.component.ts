import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BillboardMedia } from 'src/app/models/billboard-media';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.scss'],
})
export class BillboardComponent {
  @Input() billboard: BillboardMedia;
  @Output() onPlay = new EventEmitter<BillboardMedia>();

  handlePlay() {
    this.onPlay.emit(this.billboard);
  }
}
