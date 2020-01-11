import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { PlyrModule } from 'ngx-plyr';

import { IconsModule } from '../../icons.module';
import { WatchPageComponent } from './watch.page';
import { reducers } from '../../store/app.states';

describe('WatchComponent', () => {
  let component: WatchPageComponent;
  let fixture: ComponentFixture<WatchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        IconsModule,
        PlyrModule,
        RouterTestingModule,
        StoreModule.forRoot(reducers, {}),
      ],
      declarations: [WatchPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
