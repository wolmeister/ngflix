import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsModule } from '../../icons.module';
import { BrowserSliderComponent } from './browser-slider.component';
import { SliderComponent } from '../slider/slider.component';
import { MediaInformationComponent } from '../media-information/media-information.component';
import { SlideContentComponent } from '../slide-content/slide-content.component';
import { RatingComponent } from '../rating/rating.component';

describe('BrowserSliderComponent', () => {
  let component: BrowserSliderComponent;
  let fixture: ComponentFixture<BrowserSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IconsModule],
      declarations: [
        BrowserSliderComponent,
        SliderComponent,
        MediaInformationComponent,
        SlideContentComponent,
        RatingComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserSliderComponent);
    component = fixture.componentInstance;
    component.items = [];
    component.caption = '';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
