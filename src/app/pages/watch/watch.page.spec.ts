import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchPageComponent } from './watch.page';

describe('WatchComponent', () => {
  let component: WatchPageComponent;
  let fixture: ComponentFixture<WatchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
