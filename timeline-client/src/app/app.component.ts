import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MsalService, MsalBroadcastService, MSAL_GUARD_CONFIG, MsalGuardConfiguration } from '@azure/msal-angular';
import { InteractionStatus } from '@azure/msal-browser';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'msal-angular-tutorial';
  isIframe = false;
  loginDisplay = false;
  private readonly _destroying$ = new Subject<void>();

  constructor(@Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration, private authService: AuthService, private broadcastService: MsalBroadcastService, private msalService: MsalService) { }

  ngOnInit() {
    this.isIframe = window !== window.parent && !window.opener;

    this.broadcastService.inProgress$
    .pipe(
      filter((status: InteractionStatus) => status === InteractionStatus.None),
      takeUntil(this._destroying$)
    )
    .subscribe(() => {
      this.setLoginDisplay();
    });

    this.loginDisplay = this.msalService.instance.getAllAccounts().length > 0;
  }

  login() {
    this.authService.login();
    // if (this.msalGuardConfig.authRequest){
    //   this.authService.loginPopup({...this.msalGuardConfig.authRequest} as PopupRequest)
    //     .subscribe({
    //       next: (result) => {
    //         console.log(result);
    //         this.setLoginDisplay();
    //       },
    //       error: (error) => console.log(error)
    //     });
    // } else {
    //   this.authService.loginPopup()
    //     .subscribe({
    //       next: (result) => {
    //         console.log(result);
    //         this.setLoginDisplay();
    //       },
    //       error: (error) => console.log(error)
    //     });
    // }
  }

  logout() { // Add log out function here
    this.authService.logout();
    // this.authService.logoutPopup({
    //   mainWindowRedirectUri: "/"
    // });
  }

  setLoginDisplay() {
    this.authService.isUserLoggedIn$
          .subscribe(x => this.loginDisplay = x);
    //this.loginDisplay = this.msalService.instance.getAllAccounts().length > 0;
  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }
}
