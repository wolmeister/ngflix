import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsModule } from '../../icons.module';
import { BillboardComponent } from './billboard.component';

const BILLBOARD = {
  id: 1,
  background: 'assets/billboards/dracula/background.jpg',
  title: 'assets/billboards/dracula/title.png',
  supplemental: 'Watch Season 1 Now',
  synopsis: `He's been a bloody scoundrel for centuries. What happens when a worthy adversary bites back?`,
  mediaId: 7,
};

describe('BillboardComponent', () => {
  let component: BillboardComponent;
  let fixture: ComponentFixture<BillboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IconsModule],
      declarations: [BillboardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillboardComponent);
    component = fixture.componentInstance;
    component.billboard = BILLBOARD;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
