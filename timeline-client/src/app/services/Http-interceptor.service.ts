import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";

import { Injectable } from "@angular/core";

import { AccountInfo } from "@azure/msal-common";



//import { AuthService } from './auth-service';

import { Router } from "@angular/router";

import { MsalService } from "@azure/msal-angular";

import { from, lastValueFrom, Observable, of } from "rxjs";

import { finalize, tap } from "rxjs/operators";

//import { LoadingIndicatorService } from "./loading-indicator.service";

import { environment } from "src/environments/environment";

//import { UserRoleService } from "./role-services";

import { SilentRequest } from "@azure/msal-browser/dist/request/SilentRequest";
import { AuthService } from "./auth.service";



@Injectable({

  providedIn: 'root'

})

export class AuthInterceptorService implements HttpInterceptor {

  activeAccount: AccountInfo | null;

  retryOnce = true;



  // constructor(private _router: Router, private msalService: MsalService, private authService: AuthService,

  //   private loadingIndicatorService: LoadingIndicatorService, private userRoleService: UserRoleService) {

  //   this.activeAccount = this.msalService.instance.getActiveAccount();

  // }


  constructor(private _router: Router, private authService: AuthService) {

    this.activeAccount = this.authService.msalService.instance.getActiveAccount();

  }



  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const clientTokenRequestKey:string = 'client';

    const webApiTokenRequestKey:string = 'webApi';

    const graphApiTokenRequestKey:string = 'graphApi';



    //this.loadingIndicatorService.show();



    if (!(req.url.startsWith(environment.rootApiUrl) || req.url.startsWith(environment.graphBaseUri))) {

      const authReq = req.clone({ withCredentials: true });

      return next.handle(authReq);

    }



    const tokenRequests = {

      [clientTokenRequestKey]: {

        account: this.activeAccount,

        scopes: [...environment.oAuthSettings.scopes] // must pass at least user.read

      },

      [webApiTokenRequestKey]: {

        account: this.activeAccount,

        scopes: [...environment.apiScopes] // ["api://.....""]]

      },

      [graphApiTokenRequestKey]: {

        account: this.activeAccount,

        scopes: [...environment.oAuthSettings.scopes] // must pass at least user.read

      }

    }



    let tokenRequestKey: string;



    if (req.url.startsWith(environment.rootApiUrl)) {

      tokenRequestKey = webApiTokenRequestKey;

    } else if (req.url.startsWith(environment.graphBaseUri)) {

      tokenRequestKey = graphApiTokenRequestKey;

    } else {

      tokenRequestKey = clientTokenRequestKey;

    }



    // let silent: Silent = {

    //   ...tokenRequests[tokenRequestKey]

    // }



    //if (req.url.startsWith(environment.rootApiUrl) && this.activeAccount && !this.userRoleService.loadRolesFromCache() && this.retryOnce) {

    // if (req.url.startsWith(environment.rootApiUrl) && this.activeAccount && this.retryOnce) {

    //   this.retryOnce = false;

    //   //this.userRoleService.getUserRoleClaims();

    //   return of();

    // }

const account = this.authService.msalService.instance.getActiveAccount();

const promise = lastValueFrom(this.authService.msalService.initialize())
                  .then(() => lastValueFrom(this.authService.msalService?.acquireTokenSilent(tokenRequests[tokenRequestKey] as SilentRequest)));

    // return from(this.msalService.acquireTokenSilent(tokenRequests[tokenRequestKey] as SilentRequest).toPromise().then(data => {
      return from(promise.then(data => {

        const accessToken = data.accessToken;

        const headers = {

          headers: new HttpHeaders().set('Authorization', `Bearer ${accessToken}`)

        };



        const authReq = req.clone({ ...headers });



        return next.handle(authReq).pipe(tap(_ => {}, error => {

          var respError = error as HttpErrorResponse;

          if (respError && (respError.status === 401 || respError.status === 403)) {

            this._router.navigate(['/unauthorized']);
          }

        }),
        //finalize(() => this.loadingIndicatorService.hide())
        )
        .toPromise();

      })

      )

    }

}
