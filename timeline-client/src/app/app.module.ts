import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { MsalGuard, MsalInterceptor, MsalModule } from '@azure/msal-angular';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EventEntryComponent } from './event-entry/event-entry.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { AuthInterceptorService } from './services/Http-interceptor.service';
import { EventListComponent } from './event-list/event-list.component';
import { TimelineComponent } from './timeline/timeline.component';
import { AdminComponent } from './admin/admin.component';
import { EventEditDialogComponent } from './event-edit-dialog/event-edit-dialog.component';
import { environment } from 'src/environments/environment';

import { PopoverConfig, PopoverModule } from 'ngx-bootstrap/popover';

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ProfileComponent,
    EventEntryComponent,
    UnauthorizedComponent,
    EventListComponent,
    TimelineComponent,
    AdminComponent,
    EventEditDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PopoverModule,

    MaterialModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
    MsalModule.forRoot( new PublicClientApplication({
      auth: {
        clientId: environment.oAuthSettings.clientId,
        authority: environment.oAuthSettings.authority,
        redirectUri: environment.oAuthSettings.redirectUri
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: isIE,
      }
    }), {
      interactionType: InteractionType.Popup,
      authRequest: {
        scopes: ['user.read']
      }
    }, {
      interactionType: InteractionType.Popup,
      protectedResourceMap: new Map([
        ['https://graph.microsoft.com/v1.0/me', ['user.read']]
      ])
    })
  ],
  providers: [
    MsalGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
