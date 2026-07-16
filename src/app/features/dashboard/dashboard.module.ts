import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { StatsComponent } from './widgets/stats/stats.component';
import { ActivityComponent } from './charts/activity/activity.component';
import { RecentStoriesComponent } from './recent-stories/recent-stories.component';
import { AnalyticsComponent } from './analytics/analytics.component';


@NgModule({
  declarations: [
    OverviewComponent,
    StatsComponent,
    ActivityComponent,
    RecentStoriesComponent,
    AnalyticsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
