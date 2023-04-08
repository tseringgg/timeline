import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { AdminComponent } from './admin/admin.component';
import { EventListComponent } from './event-list/event-list.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { TimelineComponent } from './timeline/timeline.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const routes: Routes = [
  {
    path: 'timeline',
    component: TimelineComponent,
    // canActivate: [MsalGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [MsalGuard]
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: '',
    component: TimelineComponent
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent
  }

];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: !isIframe ? 'enabledBlocking' : 'disabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
