// This file can be replaced during build by using the `fileReplacements` array.

// `ng build` replaces `environment.ts` with `environment.prod.ts`.

// The list of file replacements can be found in `angular.json`.



import { IEnvironment } from "./ienvironment";



export const environment: IEnvironment = {

  name: 'local',

  production: true,

  rootApiUrl: 'https://timelinesoftibet.azurewebsites.net/', //'http://localhost:24568/',

  apiScopes: ['api://6c06d05c-9be0-4236-957e-37e364ffd593/access_api_as_user'],

  graphBaseUri: 'https://graph.microsoft.com/v1.0',

  oAuthSettings: {

    clientId: '8e8031e0-4716-4505-975b-e09c35744ab1',

    authority: 'https://login.microsoftonline.com/9253a53e-dae7-4db4-81b3-2aef2329d070',

    redirectUri: 'https://timelinesoftibet.azurewebsites.net/', //'http://localhost:4200',

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
