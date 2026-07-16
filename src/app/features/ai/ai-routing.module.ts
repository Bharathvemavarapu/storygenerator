import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratorFlowComponent } from './generator-flow/generator-flow.component';

const routes: Routes = [
  { path: '', component: GeneratorFlowComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AiRoutingModule { }
