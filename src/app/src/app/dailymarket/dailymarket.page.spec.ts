import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DailymarketPage } from './dailymarket.page';

describe('DailymarketPage', () => {
  let component: DailymarketPage;
  let fixture: ComponentFixture<DailymarketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailymarketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DailymarketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
