import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CreatorLayoutComponent } from './layouts/creator-layout/creator-layout.component';
import { ReaderLayoutComponent } from './layouts/reader-layout/reader-layout.component';



@NgModule({
  declarations: [
    AuthLayoutComponent,
    AdminLayoutComponent,
    CreatorLayoutComponent,
    ReaderLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    AuthLayoutComponent,
    AdminLayoutComponent,
    CreatorLayoutComponent,
    ReaderLayoutComponent
  ]
})
export class CoreModule { }
