import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // System Health Metrics
  uptime = "99.98%";
  apiCalls = "1.2M";
  activeUsers = "12,450";
  serverLoad = 42;

  // Mock User Data
  users = [
    { id: 'usr_01', name: 'Alex Rivera', role: 'Premium', status: 'Active', joined: '2025-01-15' },
    { id: 'usr_02', name: 'Sam Chen', role: 'Free', status: 'Suspended', joined: '2025-06-22' },
    { id: 'usr_03', name: 'Jordan Lee', role: 'Creator', status: 'Active', joined: '2024-11-03' },
  ];

  // Mock Content Moderation Queue
  flaggedContent = [
    { id: 'st_992', title: 'The Red Horizon', reason: 'Graphic Violence', reporter: 'System AI' },
    { id: 'st_145', title: 'Whispers in the Dark', reason: 'Copyright Claim', reporter: 'User Report' },
  ];

  approveContent(id: string) {
    this.flaggedContent = this.flaggedContent.filter(c => c.id !== id);
  }

  rejectContent(id: string) {
    this.flaggedContent = this.flaggedContent.filter(c => c.id !== id);
  }

  banUser(id: string) {
    const user = this.users.find(u => u.id === id);
    if (user) user.status = 'Banned';
  }
}
