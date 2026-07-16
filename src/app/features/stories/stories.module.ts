import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoriesRoutingModule } from './stories-routing.module';
import { CreateStoryComponent } from './create-story/create-story.component';
import { MyStoriesComponent } from './my-stories/my-stories.component';
import { StoryDetailsComponent } from './story-details/story-details.component';
import { EditStoryComponent } from './edit-story/edit-story.component';
import { StorySettingsComponent } from './story-settings/story-settings.component';


@NgModule({
  declarations: [
    CreateStoryComponent,
    MyStoriesComponent,
    StoryDetailsComponent,
    EditStoryComponent,
    StorySettingsComponent
  ],
  imports: [
    CommonModule,
    StoriesRoutingModule
  ]
})
export class StoriesModule { }
