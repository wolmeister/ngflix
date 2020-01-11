import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsModule } from '../../icons.module';
import { RatingComponent } from '../rating/rating.component';
import { MediaInformationComponent } from './media-information.component';

const ITEM = {
  id: 1,
  title: 'The Witcher',
  art: 'assets/medias/witcher/art.jpg',
  titleArt: 'assets/medias/witcher/titleArt.webp',
  file: 'assets/medias/witcher/media.mp4',
  synopsis: 'synopsis',
  rating: 16,
  duration: '1 Season',
  tags: ['Exciting'],
};

describe('MediaInformationComponent', () => {
  let component: MediaInformationComponent;
  let fixture: ComponentFixture<MediaInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IconsModule],
      declarations: [MediaInformationComponent, RatingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaInformationComponent);
    component = fixture.componentInstance;
    component.item = ITEM;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
