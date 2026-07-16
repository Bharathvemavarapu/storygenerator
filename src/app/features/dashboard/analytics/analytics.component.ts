import { Component } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent {
  timeframe = '30d';

  metrics = {
    totalViews: '142.5K',
    viewsGrowth: '+12.5%',
    uniqueReaders: '84.2K',
    readersGrowth: '+8.1%',
    avgReadTime: '12m 45s',
    readTimeGrowth: '+2m',
    completionRate: '68%',
    completionGrowth: '+4.2%'
  };

  topStories = [
    { title: 'Project Eclipse', views: '45.2K', completion: '72%' },
    { title: 'The Forgotten Planet', views: '32.1K', completion: '65%' },
    { title: 'Kingdom of Fire and Ice', views: '28.5K', completion: '81%' },
    { title: 'The Forest of Wishes', views: '15.4K', completion: '54%' }
  ];

  demographics = [
    { group: '18-24', percentage: 35 },
    { group: '25-34', percentage: 42 },
    { group: '35-44', percentage: 15 },
    { group: '45+', percentage: 8 }
  ];

  setTimeframe(tf: string) {
    this.timeframe = tf;
  }
}
