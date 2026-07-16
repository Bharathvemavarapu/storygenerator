import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyStoriesComponent } from './my-stories/my-stories.component';
import { CreateStoryComponent } from './create-story/create-story.component';

const routes: Routes = [
  { path: '', component: MyStoriesComponent },
  { path: 'new', component: CreateStoryComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoriesRoutingModule { }
