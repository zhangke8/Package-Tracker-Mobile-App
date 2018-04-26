import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTrackerDetailComponent } from './order-tracker-detail.component';

describe('OrderTrackerDetailComponent', () => {
  let component: OrderTrackerDetailComponent;
  let fixture: ComponentFixture<OrderTrackerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderTrackerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderTrackerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
