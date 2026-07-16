import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { HeroComponent } from './components/hero/hero.component';


import { LayoutModule } from 'src/app/layout/layout.module';

@NgModule({
  declarations: [
    LandingComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    LayoutModule
  ]
})
export class LandingModule { }
