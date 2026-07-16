import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { AdminLayoutComponent } from './core/layouts/admin-layout/admin-layout.component';
import { CreatorLayoutComponent } from './core/layouts/creator-layout/creator-layout.component';
import { ReaderLayoutComponent } from './core/layouts/reader-layout/reader-layout.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./features/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'stories',
        loadChildren: () => import('./features/stories/stories.module').then(m => m.StoriesModule)
      },
      {
        path: 'community',
        loadChildren: () => import('./features/community/community.module').then(m => m.CommunityModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./features/settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: 'search',
        loadChildren: () => import('./features/search/search.module').then(m => m.SearchModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule)
      }
    ]
  },
  {
    path: 'storyboard',
    component: CreatorLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./features/storyboard/storyboard.module').then(m => m.StoryboardModule)
      }
    ]
  },
  {
    path: 'reader',
    component: ReaderLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./features/reader/reader.module').then(m => m.ReaderModule)
      }
    ]
  },
  {
    path: 'ai',
    canActivate: [authGuard],
    loadChildren: () => import('./features/ai/ai.module').then(m => m.AiModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
