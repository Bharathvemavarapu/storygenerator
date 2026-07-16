import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { AccountComponent } from './account/account.component';
import { SecurityComponent } from './security/security.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { SubscriptionComponent } from './subscription/subscription.component';


@NgModule({
  declarations: [
    AccountComponent,
    SecurityComponent,
    PreferencesComponent,
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
