import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { NotificationSettingsComponent } from './notification-settings/notification-settings.component';
import { WebsocketComponent } from './websocket/websocket.component';


@NgModule({
  declarations: [
    NotificationListComponent,
    NotificationSettingsComponent,
    WebsocketComponent
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule
  ]
})
export class NotificationsModule { }
