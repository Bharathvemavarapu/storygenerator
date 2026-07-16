import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppearanceComponent } from './appearance/appearance.component';

const routes: Routes = [
  { path: '', component: AppearanceComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
