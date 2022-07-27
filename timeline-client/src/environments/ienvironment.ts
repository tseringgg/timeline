interface IOAuthSettings {
 clientId: string;
 authority: string;
 redirectUri: string;
 scopes: string[];
}

export interface IEnvironment {
  name: string;
  production: boolean;
  rootApiUrl: string;
  apiScopes: string[];
  graphBaseUri: string;
  oAuthSettings: IOAuthSettings
}
