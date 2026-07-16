import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImmersivePlayerComponent } from './immersive-player/immersive-player.component';

const routes: Routes = [
  { path: '', component: ImmersivePlayerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReaderRoutingModule { }
