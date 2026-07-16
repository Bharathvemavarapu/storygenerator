import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { PremiumCardComponent } from './components/premium-card/premium-card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AiAssistantComponent } from './components/ai-assistant/ai-assistant.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    PremiumCardComponent,
    SpinnerComponent,
    AiAssistantComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ButtonComponent,
    InputComponent,
    PremiumCardComponent,
    SpinnerComponent,
    AiAssistantComponent
  ]
})
export class SharedModule { }
