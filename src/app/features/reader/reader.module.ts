import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReaderRoutingModule } from './reader-routing.module';
import { ImmersivePlayerComponent } from './immersive-player/immersive-player.component';
import { DialogueBoxComponent } from './dialogue-box/dialogue-box.component';
import { ChoicePanelComponent } from './choice-panel/choice-panel.component';
import { ProgressComponent } from './progress/progress.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';


@NgModule({
  declarations: [
    ImmersivePlayerComponent,
    DialogueBoxComponent,
    ChoicePanelComponent,
    ProgressComponent,
    BookmarksComponent
  ],
  imports: [
    CommonModule,
    ReaderRoutingModule
  ]
})
export class ReaderModule { }
