import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumCardComponent } from './premium-card.component';

describe('PremiumCardComponent', () => {
  let component: PremiumCardComponent;
  let fixture: ComponentFixture<PremiumCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremiumCardComponent]
    });
    fixture = TestBed.createComponent(PremiumCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
