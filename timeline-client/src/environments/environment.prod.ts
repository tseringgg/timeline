// This file can be replaced during build by using the `fileReplacements` array.

// `ng build` replaces `environment.ts` with `environment.prod.ts`.

// The list of file replacements can be found in `angular.json`.



import { IEnvironment } from "./ienvironment";



export const environment: IEnvironment = {

  name: 'production',

  production: true,

  rootApiUrl: 'https://timelinesoftibet.azurewebsites.net/',

  apiScopes: ['api://0039e470-7904-4a72-9409-9e18cbc3f776/access_api_as_user'],

  graphBaseUri: 'https://graph.microsoft.com/v1.0',

  oAuthSettings: {

    clientId: '5c7983c4-032d-442b-b8ad-286af581a540',

    authority: 'https://login.microsoftonline.com/9253a53e-dae7-4db4-81b3-2aef2329d070',

    redirectUri: 'https://green-mushroom-04b7a2810.1.azurestaticapps.net/',

    scopes: ['user.read']

  }

};



/*

* For easier debugging in development mode, you can import the following file

* to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.

*

* This import should be commented out in production mode because it will have a negative impact

* on performance if an error is thrown.

*/

// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
