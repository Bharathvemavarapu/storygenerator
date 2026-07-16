import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityRoutingModule } from './community-routing.module';
import { FeedComponent } from './feed/feed.component';
import { CommentsComponent } from './comments/comments.component';
import { LikesComponent } from './likes/likes.component';
import { FollowersComponent } from './followers/followers.component';
import { TrendingComponent } from './trending/trending.component';


@NgModule({
  declarations: [
    FeedComponent,
    CommentsComponent,
    LikesComponent,
    FollowersComponent,
    TrendingComponent
  ],
  imports: [
    CommonModule,
    CommunityRoutingModule
  ]
})
export class CommunityModule { }
