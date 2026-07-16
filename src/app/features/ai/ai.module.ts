import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AiRoutingModule } from './ai-routing.module';
import { GeneratorFlowComponent } from './generator-flow/generator-flow.component';
import { GenerationHistoryComponent } from './generation-history/generation-history.component';
import { AiSettingsComponent } from './ai-settings/ai-settings.component';


@NgModule({
  declarations: [
    GeneratorFlowComponent,
    GenerationHistoryComponent,
    AiSettingsComponent
  ],
  imports: [
    CommonModule,
    AiRoutingModule
  ]
})
export class AiModule { }
