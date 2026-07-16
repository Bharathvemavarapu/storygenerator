import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorLayoutComponent } from './creator-layout.component';

describe('CreatorLayoutComponent', () => {
  let component: CreatorLayoutComponent;
  let fixture: ComponentFixture<CreatorLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatorLayoutComponent]
    });
    fixture = TestBed.createComponent(CreatorLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
