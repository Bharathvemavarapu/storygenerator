import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiAssistantComponent } from './ai-assistant.component';

describe('AiAssistantComponent', () => {
  let component: AiAssistantComponent;
  let fixture: ComponentFixture<AiAssistantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiAssistantComponent]
    });
    fixture = TestBed.createComponent(AiAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
