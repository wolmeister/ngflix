import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { IconsModule } from '../../icons.module';
import { HeaderComponent } from '../../components/header/header.component';
import { BillboardComponent } from '../../components/billboard/billboard.component';
import { SliderComponent } from '../../components/slider/slider.component';
import { BrowserSliderComponent } from '../../components/browser-slider/browser-slider.component';
import { MediaInformationComponent } from '../../components/media-information/media-information.component';
import { SlideContentComponent } from '../../components/slide-content/slide-content.component';
import { RatingComponent } from '../../components/rating/rating.component';
import { HomePageComponent } from './home.page';
import { reducers } from '../../store/app.states';

describe('HomeComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(reducers, {}),
        IconsModule,
      ],
      declarations: [
        HomePageComponent,
        HeaderComponent,
        BillboardComponent,
        BrowserSliderComponent,
        SliderComponent,
        MediaInformationComponent,
        SlideContentComponent,
        RatingComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
