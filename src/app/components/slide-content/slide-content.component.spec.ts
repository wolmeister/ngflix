import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideContentComponent } from './slide-content.component';
import { IconsModule } from '../../icons.module';
import { RatingComponent } from '../rating/rating.component';

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

describe('SlideContentComponent', () => {
  let component: SlideContentComponent;
  let fixture: ComponentFixture<SlideContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IconsModule],
      declarations: [SlideContentComponent, RatingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideContentComponent);
    component = fixture.componentInstance;
    component.item = ITEM;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
