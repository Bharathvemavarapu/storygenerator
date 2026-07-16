import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StoryboardRoutingModule } from './storyboard-routing.module';
import { CanvasComponent } from './canvas/canvas.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NodeEditorComponent } from './node-editor/node-editor.component';
import { GraphViewComponent } from './graph-view/graph-view.component';
import { ImageGeneratorComponent } from './image-generator/image-generator.component';


@NgModule({
  declarations: [
    CanvasComponent,
    TimelineComponent,
    NodeEditorComponent,
    GraphViewComponent,
    ImageGeneratorComponent
  ],
  imports: [
    CommonModule,
    StoryboardRoutingModule,
    FormsModule
  ]
})
export class StoryboardModule { }
