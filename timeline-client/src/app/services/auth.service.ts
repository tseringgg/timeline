import { Inject, Injectable } from "@angular/core";

import { BehaviorSubject, Subject } from 'rxjs';

import { filter, takeUntil } from 'rxjs/operators';

import { MSAL_GUARD_CONFIG, MsalGuardConfiguration, MsalBroadcastService, MsalService } from "@azure/msal-angular";

import { InteractionStatus } from "@azure/msal-browser";



@Injectable({

  providedIn: 'root'

})

export class AuthService {

  private readonly _destroying$ = new Subject<void>();

  isUserLoggedIn: boolean = false;

  private isUserLoggedInSubject = new BehaviorSubject<boolean>(false);

  isUserLoggedIn$ = this.isUserLoggedInSubject.asObservable();



  constructor(@Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration, private broadcastService: MsalBroadcastService, private msalService: MsalService) {

    this.broadcastService.inProgress$

    .pipe(

      filter((status: InteractionStatus) => status === InteractionStatus.None),

      takeUntil(this._destroying$)

    )

    .subscribe(() => {

      this.setLoginState();

    })

  }



  login():void {

    this.msalService.loginPopup()

      .subscribe({

        next: (result) => {

          this.msalService.instance.setActiveAccount(result.account);



          this.setLoginState();

        },

        error: (error) => console.log(error)

      })

    }



    logout(): void {

      this.msalService.logoutPopup({

        mainWindowRedirectUri: '/'

      });

    }



    setLoginState(): void {

      this.isUserLoggedIn = this.msalService.instance.getAllAccounts().length > 0;

      this.isUserLoggedInSubject.next(this.isUserLoggedIn);

    }



    refreshLoginState() {

      this.isUserLoggedInSubject.next(!!this.msalService.instance.getActiveAccount());

    }

} 
